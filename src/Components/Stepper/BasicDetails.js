// import React, { useState, useEffect, useContext } from "react";
// import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import "./style.css";
// import { upper } from "../../Pages/JoinPetHost/petHost/common/normalijation";

// const PrintOnly = () => {
//   const value = useContext(LabelContext);
//   const [shippingCoast, setshippingCoast] = useState(0);

//   useEffect(() => {
//     const weight = value.labelInfo.weight;
//     const shippingOption = value.labelInfo.shippingOption;

//     const shippingRate = 0.4,
//       shippingCost = weight * shippingRate * (shippingOption === "1" ? 1 : 1.5);

//     const shippingTotal = shippingCost.toFixed(2);
//     setshippingCoast(shippingTotal);
//   }, []);
//   console.log(shippingCoast, "shippingCoast");
//   console.log(value, "value");
//   return (
//     <>
//       <h6>Sender Information</h6>
//       <div>
//         <div className="child">
//           <TextField
//             style={{ margin: 8, width: "93%" }}
//             fullWidth
//             label="Full Name"
//             value={upper(value.labelInfo.sender.name)}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             label="Street Address"
//             fullWidth
//             margin="normal"
//             value={upper(value.labelInfo.sender.street)}
//             style={{ margin: 8, width: "93%" }}
//             InputProps={{
//               readOnly: true,
//             }}
//           />

//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="City"
//             value={upper(value.labelInfo.sender.city)}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="State"
//             value={upper(value.labelInfo.sender.state)}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="ZipCode"
//             value={value.labelInfo.sender.zipCode}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//         </div>
//         <h6>Recevier Information</h6>
//         <div className="child">
//           <TextField
//             label="Full Name"
//             style={{ margin: 8, width: "93%" }}
//             fullWidth
//             value={upper(value.labelInfo.recevier.name)}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             style={{ margin: 8, width: "93%" }}
//             label="Street Address"
//             fullWidth
//             margin="normal"
//             value={upper(value.labelInfo.recevier.street)}
//             InputProps={{
//               readOnly: true,
//             }}
//           />

//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="City"
//             value={upper(value.labelInfo.recevier.city)}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="State"
//             value={upper(value.labelInfo.recevier.state)}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="ZipCode"
//             value={value.labelInfo.recevier.zipCode}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//         </div>
//         <h6>Shipping Information</h6>
//         <div className="child">
//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="Weight **lbs"
//             value={value.labelInfo.weight}
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="Shipping Type"
//             value={
//               value.labelInfo.shippingOption === "1" ? "GROUND" : "PRIOROTY"
//             }
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             required
//             style={{ width: "31%", margin: 1 }}
//             label="Shiiping Coast"
//             value={shippingCoast}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">$</InputAdornment>
//               ),
//               readOnly: true,
//             }}
//           />
//         </div>

//         <ButtonGroup
//           color="secondery"
//           aria-label="text primary button group"
//           style={{ marginTop: 15 }}
//         >
//           <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
//             Go Back
//           </Button>
//           <Button onClick={() => window.print()} style={{ margin: 25 }}>
//             Print Info
//           </Button>
//         </ButtonGroup>
//       </div>
//     </>
//   );
// };
// export default PrintOnly;
import React, { useContext } from "react";
import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CustomForm from "../CustomForm/CustomForm";
import { Grid, Typography } from "@mui/material";
// import InputAdornment from "@material-ui/core/InputAdornment";
import "./style.css";
import {
  BasicDetailsEntries,
  DefaultBasicDetailsValues,
  PetHostBasicDetailsEntries,
} from "../../Pages/JoinPetHost/petHost/PetHostBasicDetailsEntries";

const BasicDetails = () => {
  const value = useContext(LabelContext);
  const BD = value.labelInfo?.BasicDetails;
  console.log(BD, "manoj");

  const pg = value.page;
  const btnDisbaled =
    BD.firstText?.length > 0 &&
    BD.SecondText?.length > 0 &&
    BD.ThirdText?.length > 0 &&
    BD.fourthText?.length > 0 &&
    BD.fifthText?.length > 0 &&
    BD.sixthText?.length > 0 &&
    BD.seventhText?.length > 0 &&
    BD.pin_code?.length > 0 &&
    BD.fileUploader?.length > 0 &&
    BD.location?.length > 0;
  console.log(BD.NameofPet, "name");
  console.log(BD.Status1, "gen");
  // BD.Address?.length > 0 &&
  // BD.City?.length > 0 &&
  // BD.State?.length > 0 &&
  // BD.Locality?.length > 0 &&
  // BD.Pincode?.length > 0;
  // BD.mobile_number?.length > 0 &&
  // BD.Gender?.length > 0 &&
  // BD.dob?.length > 0 &&
  // BD.NNameOfYourPetBoardingSpace?.length > 0 &&
  // BD.Address?.length > 0 &&
  // BD.City?.length > 0 &&
  // BD.State?.length > 0 &&
  // BD.Locality?.length > 0 &&
  // BD.Pincode?.length > 0;
  //  mobile_number: "",
  // Gender: "",
  // dob: "",
  // NameOfYourPetBoardingSpace: "",
  // Address: "",
  // City: "",
  // State: "",
  // Locality: "",
  // Pincode: "",
  console.log(pg, "pg");
  console.log(BD, "BD");
  console.log(value, "valueBD");
  console.log(btnDisbaled, "btnDisbaled");
  return (
    <form>
      <Grid>
        {/* <CustomForm
          AllEntries={petSpaceEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPetSpaceValues}
        /> */}
        <Typography variant="h4">Fill Up Your Basic Details</Typography>
        <CustomForm
          AllEntries={BasicDetailsEntries}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultBasicDetailsValues}
        />
      </Grid>

      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="text primary button group"
        style={{ marginTop: 15 }}
      >
        {/* <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button> */}
        <Button
          disabled={!btnDisbaled}
          onClick={() => value.nextPage()}
          style={{ margin: 25 }}
        >
          {console.log(value, "vvvvvv")}Next
        </Button>
      </ButtonGroup>
    </form>
  );
};
export default BasicDetails;
