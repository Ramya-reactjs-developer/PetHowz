// import React, { useContext } from "react";
// import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import Radio from "@material-ui/core/Radio";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import "./style.css";

// const GetShippingOption = (props) => {
//   const val = useContext(LabelContext);
//   const [shipping, setshipping] = React.useState("");
//   const setId = (event) => {
//     event.preventDefault();
//     setshipping(event.target.value);
//   };
//   const btnDisbaled = shipping.length > 0;

//   return (
//     <form>
//       <h4> Select shipping option</h4>
//       <RadioGroup
//         aria-label="weight"
//         name="weight"
//         value={shipping}
//         className="form"
//         onChange={setId}
//       >
//         <FormControlLabel
//           control={<Radio />}
//           label="Ground"
//           value="1"
//           onChange={val.handleChange("shippingOption")}
//         />
//         <FormControlLabel
//           control={<Radio />}
//           label="Priority"
//           value="2"
//           onChange={val.handleChange("shippingOption")}
//         />
//       </RadioGroup>
//       <ButtonGroup
//         variant="contained"
//         color="primary"
//         aria-label="text primary button group"
//         style={{ marginTop: 15 }}
//       >
//         <Button onClick={() => val.prevPage()} style={{ margin: 25 }}>
//           Previous
//         </Button>
//         <Button
//           disabled={!btnDisbaled}
//           onClick={() => val.nextPage()}
//           style={{ margin: 25 }}
//         >
//           Next
//         </Button>
//       </ButtonGroup>
//     </form>
//   );
// };
// export default GetShippingOption;
import React, { useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { PetHostAddOnEntries } from "../../Pages/JoinPetHost/petHost/PetHostAddOnEntries";
import CustomForm from "../CustomForm/CustomForm";
import { Grid, Typography } from "@mui/material";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./style.css";

const PetHostAddOn = (props) => {
  const value = useContext(LabelContext);
  const weight = value.labelInfo.weight;
  const btnDisbaled = weight.length > 0;

  const [entry, setEntry] = React.useState([]);

  return (
    <form>
      <Typography variant="h4">
        Fill Up Details About Your Add on Package
      </Typography>
      <Grid>
        <CustomForm
          AllEntries={entry.length > 0 ? entry : PetHostAddOnEntries}
        />
      </Grid>

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button>
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default PetHostAddOn;
