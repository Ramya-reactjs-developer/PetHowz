// import React, { useContext } from "react";
// import { LabelContext } from "../../Pages/PetService/LableData";
// // import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import CustomForm from "../CustomForm/CustomForm";
// import { Grid } from "@mui/material";
// import {
//   UploadImageEntries,
//   DefaultUploadImageValues,
// } from "../../Pages/PetService/UploadImageEntries";
// import "./style.css";

// const UploadImage = (props) => {
//   const value = useContext(LabelContext);
//   const shippingOption = value.labelInfo?.shippingOption;
//   console.log(shippingOption, "valkjndjhfdjiue");

//   const btnDisabled =
//     shippingOption.fileUploader?.length > 0 &&
//     shippingOption.fileUploaderImage?.length > 0

//   return (
//     <form>
//       <h4> Become a Pet Service Provider</h4>
//       <h5>Upload images for the list of services you have choosen</h5>

//       <Grid>
//         <CustomForm
//           AllEntries={UploadImageEntries}
//           onChangeRadioAction={value.handleOnChange}
//           textFieldChange={value.handleChange}
//           // onReceiveData={onReceiveData}
//           defaultValues={DefaultUploadImageValues}
//         />
//       </Grid>

//       <ButtonGroup
//         variant="contained"
//         color="primary"
//         aria-label="text primary button group"
//         style={{ marginTop: 15 }}
//       >
//         <Button
//           disabled={!btnDisabled}
//           onClick={() => value.nextPage()}
//           style={{ margin: 25 }}
//         >
//           Next
//         </Button>
//       </ButtonGroup>
//     </form>
//   );
// };
// export default UploadImage;


import React, { useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import {
  UploadImageEntries,
  DefaultUploadImageValues,
} from "../../Pages/PetService/UploadImageEntries";
import "./style.css";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";


const UploadImage = (props) => {
  const value = useContext(LabelContext);
  const shippingOption = value.labelInfo?.shippingOption;
  console.log(shippingOption, "vLOGG");
  console.log(value, "VBHRTHHH");

  const btnDisabled =
    shippingOption.fileUploader?.length > 0 &&
    shippingOption.fileUploaderImage?.length > 0

  return (
    <form>
      <h4> Become a Pet pet Host</h4>
      <h5> Rules</h5>

      <Grid>
            <CustomForm
          AllEntries={UploadImageEntries}
          onChangeRadioAction={value.handleOnChange}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultUploadImageValues}
        />
      </Grid>

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        <Button
          disabled={!btnDisabled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default UploadImage;

