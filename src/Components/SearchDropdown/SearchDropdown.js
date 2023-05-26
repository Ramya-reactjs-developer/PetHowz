// import React, {
//   useCallback,
//   useReducer,
//   useEffect,
//   useRef,
//   useLayoutEffect,
// } from "react";
// import { throttle } from "lodash";
// import "./style.css";
// import Field from "./Field";
// /*
//   const navigate = throttle(
//     (direction, dispatch) => dispatch({ type: direction }),
//     50
//   );
//   */
// const filter = (f, arr) => arr.filter(f);
// const prop = (key) => (obj) => obj[key];
// const strIncludes = (query) => (str) => str.includes(query);
// const toLower = (str) => str.toLowerCase();
// const pipe =
//   (...fns) =>
//   (x) =>
//     fns.reduce((y, f) => f(y), x);
// const labelIncludes = (query, label) =>
//   pipe(prop(label), toLower, strIncludes(query));
// const filterOpts = (q, l, o) => filter(labelIncludes(q, l), o);

// // TODO multiple selections
// const Dropdown = ({ options, id, label, prompt, value, onChange }) => {
//   const initialState = {
//     open: false,
//     query: "",
//     filteredOptions: options,
//     activeIndex: 0,
//   };

//   const [{ open, query, filteredOptions, activeIndex }, dispatch] = useReducer(
//     reducer,
//     initialState
//   );

//   function reducer(state, action) {
//     switch (action.type) {
//       case "select":
//         return {
//           ...state,
//           open: false,
//           query: "",
//           filteredOptions: options,
//         };
//       case "toggle":
//         return { ...state, open: !state.open, query: "" };
//       case "close":
//         return { ...state, open: false, query: "" };
//       case "open":
//         return { ...state, open: true };
//       case "query":
//         return {
//           ...state,
//           query: action.value,
//           open: true,
//           activeIndex: 0,
//           filteredOptions: filterOpts(action.value, label, options),
//         };
//       case "increment":
//         return {
//           ...state,
//           activeIndex: (state.activeIndex + 1) % state.filteredOptions.length,
//         };
//       case "decrement":
//         return {
//           ...state,
//           activeIndex:
//             (state.activeIndex - 1 + state.filteredOptions.length) %
//             state.filteredOptions.length,
//         };
//       default:
//         throw new Error("Unexpected action");
//     }
//   }

//   const ref = useRef(null);
//   const itemsRef = useRef([]);

//   /**
//    * functions defined in the body of your function component get recreated
//    * on every render cycle.
//    * Thus throttle would be recreated and inefficient.
//    * There are strategies to cope with it (hoist them outside of the component,
//    * , use useCallback).
//    */
//   const navigate = useCallback(
//     throttle((direction) => dispatch({ type: direction }), 50),
//     []
//   );

//   useEffect(() => {
//     itemsRef.current = itemsRef.current.slice(0, filteredOptions.length);
//   }, [filteredOptions]);

//   useLayoutEffect(() => {
//     if (itemsRef.current[activeIndex]) {
//       //console.log(itemsRef.current[activeIndex]);
//       itemsRef.current[activeIndex].scrollIntoView({
//         block: "nearest",
//         inline: "start",
//       });
//     }
//   }, [activeIndex]);

//   useEffect(() => {
//     function toggle(e) {
//       let onInput = e && e.target === ref.current;
//       if (!onInput) {
//         dispatch({ type: "close" });
//       }
//     }
//     document.addEventListener("click", toggle);
//     return () => document.removeEventListener("click", toggle);
//   }, [dispatch]);

//   const handleSelect = (option) => {
//     onChange(option);
//     dispatch({ type: "select", action: option });
//   };

//   return (
//     <div className="dropdown">
//       <div
//         className="control"
//         onClick={() => {
//           dispatch({ type: "toggle" });
//         }}
//       >
//         <div className="selected-value">
//           <input
//             required
//             placeholder={value ? value[label] : prompt}
//             className={value ? "has-value" : ""}
//             type="text"
//             onKeyDown={(event) => {
//               if (event.key === "Enter" && filteredOptions[activeIndex]) {
//                 event.preventDefault();
//                 handleSelect(filteredOptions[activeIndex]);
//                 ref.current.blur();
//               } else if (event.key === "ArrowUp") {
//                 event.preventDefault();
//                 navigate("decrement");
//               } else if (event.key === "ArrowDown") {
//                 event.preventDefault();
//                 navigate("increment");
//               }
//             }}
//             onChange={(e) => {
//               dispatch({ type: "query", value: e.target.value });
//             }}
//             value={query}
//             ref={ref}
//           />
//         </div>
//         <div className={`arrow closed`} />
//       </div>
//       <div className={`options ${open ? "open" : null}`}>
//         {filteredOptions.map((option, i) => {
//           let isActive = filteredOptions[activeIndex][id] === option[id];
//           return (
//             <Field
//               option={option}
//               index={i}
//               isActive={isActive}
//               key={option[id]}
//               id={id}
//               label={label}
//               handleSelect={handleSelect}
//               query={query}
//               ref={itemsRef}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Dropdown;
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Grid } from "semantic-ui-react";
import "./style.css";
import CustomTypography from "../Typography/Typography";
export default function Dropdown(props) {
  return (
    <Grid container md={12} sm={12} lg={12} xs={12} className="searchDropdown">
      <Grid item md={12} sm={12} lg={12} xs={12}>
        <CustomTypography
          text={props.text}
          customClass="state"
        ></CustomTypography>
      </Grid>
      <Autocomplete
        disablePortal
        name={props.name}
        disableClearable
        id="combo-box-demo"
        options={props.options}
        // sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label={props.label} className="searchText" />
        )}
        onChange={(e, value) => {
          console.log(value,"bgnbghnh");
          props.onChange(value, props.name);
        }}
        value={props.value}
      />
    </Grid>
  );
}
