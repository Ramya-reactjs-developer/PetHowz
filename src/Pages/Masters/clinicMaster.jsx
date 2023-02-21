// import React, { useState } from "react";
// import CustomRadioButton from "../../components/radioButton/radioButton";
// import CustomButton from "../../components/button/button";
// import CustomSelect from "../../components/select/select";
// import CustomCheckbox from "../../components/checkbox/checkbox";
// import CustomDatePicker from "../../components/datePicker/datePicker";
// import CustomDialog from "../../components/dialog/dialog";
// import CustomTextarea from "../../components/textArea/textArea";
// import { Grid } from "@mui/material";
// function ClinicMaster() {
//   const [checked, setChecked] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [radio, setRadio] = useState("");
//   const [select, setSelect] = useState("");
//   const [textareaValue, setTextareaValue] = useState('');

//   const handleTextAreaChange = (event) => {
//     setTextareaValue(event.target.value);
//   };

//   const handleChangeSelect = (event) => {
//     setSelect(event.target.value);
//   };
//   const handleChangeCheckbox = (event) => {
//     setChecked(event.target.checked);
//   };
//   const handleClose = () => {
//     setIsOpen(false);
//   };
//   const handleOpen = () => {
//     setIsOpen(true);
//   };
//   const handleChangeRadio = (event) => {
//     setRadio(event.target.value);
//   };
//   const options = [
//     { label: "Male", value: "m" },
//     { label: "Female", value: "f" },
//     { label: "Other", value: "o" },
//   ];
//   const actions = <>button </>;

//   return (
//    <>
//       <CustomButton
//         btnTitle="submit"
//         variant="contained"
//         color="primary"
//         btnStyles={{
//           color: "#fff",
//           background: "#4A0239",
//           marginTop: "50px",
//         }}
//         // onClickHandle={handleClose()}
//       />
//       <CustomButton
//         btnTitle="cancel"
//         variant="outlined"
//         color="error"
//         btnStyles={{
//           color: "#FF748B",
//           marginTop: "50px",
//           border: "1px solid #FB718A",
//         }}
//         // onClickHandle={() => handleClose()}
//       />

//       <CustomCheckbox
//         name="agreement"
//         label="Agree to terms and conditions"
//         checked={checked}
//         onChange={handleChangeCheckbox}
//       />

//       <CustomRadioButton
//         name="custom-radio-button"
//         value={radio}
//         label="Gender"
//         options={options}
//         onChange={handleChangeRadio}
//       />

//       <CustomSelect
//         label="Status"
//         options={[
//           { label: "Active", value: "a" },
//           { label: "Inactive", value: "i" },
//           { label: "Leave", value: "L" },
//         ]}
//         value={select}
//         onChange={handleChangeSelect}
//       />

//       <CustomDatePicker />
//       <button onClick={handleOpen}>Modal or Dialog</button>
//       <CustomDialog
//         isOpen={isOpen}
//         onClose={handleClose}
//         title="Custom Dialog"
//         content={<>Content</>}
//         actions={actions}
//       />
//        <CustomTextarea
//       label="Enter some text"
//       placeholder="Type here"
//       value={textareaValue}
//       onClickHandle={handleTextAreaChange}
//       disabled={false}
//       rows={4}
//     />

//     </>
//   );
// }

// export default ClinicMaster;

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import CustomRadioButton from "../../components/radioButton/radioButton";
import CustomButton from "../../components/button/button";
import CustomSelect from "../../components/select/select";
import CustomCheckbox from "../../components/checkbox/checkbox";
import CustomDatePicker from "../../components/datePicker/datePicker";
import CustomDialog from "../../components/dialog/dialog";
import CustomTextarea from "../../components/textArea/textArea";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ClinicMaster() {
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [radio, setRadio] = useState("");
  const [select, setSelect] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextAreaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleChangeSelect = (event) => {
    setSelect(event.target.value);
  };
  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleChangeRadio = (event) => {
    setRadio(event.target.value);
  };
  const options = [
    { label: "Male", value: "m" },
    { label: "Female", value: "f" },
    { label: "Other", value: "o" },
  ];
  const actions = <><CustomButton
  btnTitle="submit"
  variant="contained"
  color="primary"
  btnStyles={{
    color: "#fff",
    background: "#4A0239",
    marginTop: "0px",
  }}
  // onClickHandle={handleClose()}
/> </>;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Item>
            {" "}
            <CustomButton
              btnTitle="submit"
              variant="contained"
              color="primary"
              btnStyles={{
                color: "#fff",
                background: "#4A0239",
                marginTop: "0px",
              }}
              // onClickHandle={handleClose()}
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            {" "}
            <CustomCheckbox
              name="agreement"
              label="Agree to terms and conditions"
              checked={checked}
              onChange={handleChangeCheckbox}
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            {" "}
            <CustomRadioButton
              name="custom-radio-button"
              value={radio}
              label="Gender"
              options={options}
              onChange={handleChangeRadio}
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            {" "}
            <CustomSelect
              label="Status"
              options={[
                { label: "Active", value: "a" },
                { label: "Inactive", value: "i" },
                { label: "Leave", value: "L" },
              ]}
              value={select}
              onChange={handleChangeSelect}
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            <CustomDatePicker />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            {" "}
            <CustomButton
              btnTitle="Modal"
              variant="outlined"
              color="error"
              btnStyles={{
                color: "#FF748B",
                marginTop: "0px",
                border: "1px solid #FB718A",
              }}
              onClickHandle={() => handleOpen()}
            />
            {/* <button onClick={handleOpen}>Modal or Dialog</button> */}
            <CustomDialog
              isOpen={isOpen}
              onClose={handleClose}
              title="Custom Dialog"
              content={
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  tristique quis sem vel faucibus. Nam non erat tristique,
                  tempus ipsum egestas, pretium eros. Praesent nec arcu dolor.
                  Maecenas at nunc ut justo tristique dictum sed quis neque.
                  Morbi ac fermentum nibh, et blandit ex. Aliquam quis ligula et
                  lorem ornare viverra. Maecenas congue ut sapien at imperdiet.
                  Mauris at ultricies lacus, et sagittis libero. Nulla eget
                  lectus ut odio vehicula sollicitudin id nec magna.
                  Pellentesque finibus nunc quam, facilisis volutpat elit
                  rhoncus sed. Pellentesque dapibus, felis in porttitor ornare,
                  lectus elit suscipit justo, quis aliquam dui nisl eu neque.
                  Fusce blandit elit nisi, sed egestas mi venenatis vel. Integer
                  nibh lacus, cursus sed vulputate vitae, condimentum ut dui.
                  Integer sed imperdiet justo. Suspendisse vehicula erat id orci
                  hendrerit, ac sollicitudin quam tincidunt. Orci varius natoque
                  penatibus et magnis dis parturient montes, nascetur ridiculus
                  mus. Quisque id velit in tellus viverra convallis. Cras
                  egestas lectus vel neque feugiat dictum. Ut rutrum, risus ut
                  auctor facilisis, dui mauris suscipit dolor, ac rhoncus orci
                  mauris eget sem. Sed elementum erat et aliquam lacinia. Nam at
                  lacinia ipsum, ut consectetur turpis. Nulla facilisi. Nulla
                  dictum, turpis maximus dapibus dapibus, purus justo bibendum
                  nibh, non vulputate mauris justo eu sem. Phasellus rutrum quis
                  lacus vitae viverra.Quisque faucibus lectus ex, ut scelerisque
                  eros iaculis a. Morbi id eros velit. In velit odio,
                  scelerisque eget dictum cursus, vehicula eget urna. Proin
                  rhoncus, magna nec vestibulum viverra, sapien dui imperdiet
                  magna, eget pulvinar nibh diam eget purus. Quisque eget
                  aliquam nulla. Nunc tempus tellus vitae nisi rutrum, eget
                  gravida ex tempor. In ut libero pharetra nulla rutrum
                  hendrerit. Phasellus malesuada vehicula orci, id finibus nibh
                  porta non. Suspendisse potenti. In hac habitasse platea
                  dictumst. Vivamus tincidunt ut purus et varius. Vivamus nec
                  dictum nisl. Vivamus scelerisque felis eget ex hendrerit, vel
                  pharetra lacus suscipit. Sed tincidunt dui vel accumsan
                  maximus. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Nam tincidunt
                  ullamcorper tellus. Donec volutpat mauris magna, in congue
                  orci sodales eu. Cras ut varius leo. Ut tristique et augue
                  eget fringilla. Donec et feugiat lectus. Nulla vestibulum
                  libero consequat nisi hendrerit blandit. Aliquam sem lacus,
                  congue cursus nulla at, auctor dignissim nulla. Sed sit amet
                  malesuada tortor, ut dapibus felis. Integer ex risus,
                  hendrerit facilisis ullamcorper quis, molestie ut eros.
                  Praesent vulputate lectus in mauris fermentum, ut mattis nisi
                  fringilla. Proin volutpat elit tortor, nec aliquet mi
                  tristique in. Aliquam id gravida elit, vel porttitor ipsum.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus rutrum sapien lacus, et gravida arcu placerat id. Sed
                  quis erat ut dui auctor pharetra. Vivamus facilisis lacus
                  eleifend, scelerisque elit ac, vestibulum ipsum. Proin dictum
                  purus magna, eu tempus eros eleifend eu. Etiam sagittis id
                  nulla non condimentum. Pellentesque finibus id diam in
                  sagittis. Aenean bibendum mi neque, at porta lacus tempus eu.
                </>
              }
              actions={actions}
            />
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            {" "}
            <CustomTextarea
              label="Enter some text"
              placeholder="Type here"
              value={textareaValue}
              onClickHandle={handleTextAreaChange}
              disabled={false}
              rows={4}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
