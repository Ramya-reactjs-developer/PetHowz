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

// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import { Grid, Typography } from "@mui/material";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import "./style.css";

import { Controller, useForm } from "react-hook-form";
import {
  DefaultPHBBasicDetailsValues,
  PHBBasicDetailsEntries,
} from "../PetHomeBoardingEntries.jsx/PHBBasicDetailsEntries";
import { PetHomeBoardingContext } from "../PetHomeBoardingContext";
import CustomTextField from "../../../../Components/TextField/TextField";
import CustomImageUploader from "../../../../Components/FileUploader/FileUpload";
// import CustomIcons from "../../../../Utils/Icons/Index";
import CustomTypography from "../../../../Components/Typography/Typography";
import CustomRadioButton from "../../../../Components/RadioButton/RadioButton";
import CustomButton from "../../../../Components/Button/Button";
import CustomForm from "../../../../Components/CustomForm/CustomForm";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../../Redux/Actions";
import Swal from "sweetalert2";
import CustomFileUploader from "../../../../Components/FileUploader/FileUpload";
import { useState } from "react";
import { FileUpload } from "@mui/icons-material";
import { phbbasicdetailsAction } from "../../../../Redux/Slices/PetHomeBoardingSlice/PHBBasicDetailsSlice";

const PHBBasicDetails = (props) => {
  const dispatch = useDispatch();
  const userGet = useSelector((state) => state?.phbbasicdetails);
  const login = localStorage.getItem("LoginChecker");

  console.log(userGet.phbbasicdetails.message, "userGet");
  console.log(login, "login");
  const defaultValues = DefaultPHBBasicDetailsValues;
  const [state, setstate] = React.useState();
  console.log(state, "state");
  const [resetValue, setResetValue] = React.useState([]);

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    DefaultPHBBasicDetailsValues,
  });
  const value = useContext(PetHomeBoardingContext);

  console.log(value, "valueBD");

  const onSubmit = (data1) => {
    console.log(data1, "checkdata");
    const formData = new FormData();
    formData.append("pet_boarding_space_name", data1.pet_boarding_space_name);
    formData.append("name", data1.name);
    formData.append("mobile_number", data1.mobile_number);
    formData.append("street", data1.street);
    formData.append("city", data1.city);
    formData.append("locality", data1.locality);
    formData.append("image", image.raw);
    formData.append("state", data1.state);
    formData.append("pincode", data1.pincode);
    formData.append("pin_location", data1.pin_location);
    formData.append("user_id", parseInt(login));
    const data = {
      data: formData,
      method: "post",
      apiName: "createPetBoardingBasicDetails",
    };
    console.log(data1, "checkdata");
    // setTimeout(() => {

    dispatch(actions.PHBBASICDETAILS(data));
    setResetValue(defaultValues);
    reset(defaultValues);
    // }, 200);
  };
  const onNext = () => {
    // if (userGet?.phbbasicdetails?.message === "SUCCESS" && value.page === 0) {
    //   Swal.fire("Details Added Successfully", "Thank You", "success").then(
    //     (result) => {
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         value.nextPage();
    //       }
    //     }
    //   );
    // }
    if (userGet?.phbbasicdetails?.data?.message === "SUCCESS" && value.page === 0) {
      setResetValue(defaultValues);
      localStorage.setItem(
        "user_type",
        userGet?.phbbasicdetails?.data?.data?.user_type
      );
      localStorage.setItem(
        "pet_space_id",
        userGet?.phbbasicdetails?.data?.data?.pet_space_id
      );
      // alert(1);
      dispatch(phbbasicdetailsAction.reset());
      value.nextPage();
      localStorage.setItem("pages",value.page+1)
    }
  };
  React.useEffect(() => {
    onNext();
    console.log(userGet?.phbbasicdetails?.message, "oooo");
    console.log(value, "oooo1");
  }, [userGet, value]);

  const [image, setImage] = useState({ preview: "", raw: "" });
  const handleChange = (e) => {
    console.log(e, "eswar");
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const handleUpload = async (e) => {
    console.log(e, "fileUpload");
    e.preventDefault();
    const formData = new FormData();
    console.log(image.raw, "formData");
    formData.append("image", image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };
  return (
    <>
      <Grid container md={12} sm={12} lg={12} xs={12}>
        <Grid item md={12} sm={12} lg={12} xs={12}>
          <Grid item md={12} sm={12} lg={12} xs={12}>
            <Typography variant="h4">Fill Up Your Basic Details</Typography>
          </Grid>
          {/* <Grid item md={12} sm={12} lg={12} xs={12}>
            <CustomForm
              AllEntries={PHBBasicDetailsEntries}
              textFieldChange={value.handleChange}
              // onReceiveData={onReceiveData}
              defaultValues={DefaultPHBBasicDetailsValues}
            />
          </Grid> */}
          <Grid container className="NewsBorder" md={12}>
            {PHBBasicDetailsEntries?.map((keyValue) => (
              <Grid item md={keyValue.breakpoint} sm={12} xs={12}>
                <Controller
                  name={keyValue.name}
                  rules={{
                    required: keyValue?.validation?.required,
                    pattern: keyValue.pattern,
                    // validate: (value) => value === password,
                  }}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <>
                      {keyValue?.isTextInput && (
                        <Grid
                          className="textInputWidth"
                          item
                          md={12}
                          sm={12}
                          xs={12}
                          my={2}
                          mx={2}
                        >
                          <CustomTextField
                            label={keyValue.label}
                            onHandleChange={(e) => {
                              onChange(e);
                              // textFieldChange(e, keyValue.name);
                            }}
                            value={value}
                            multiline={keyValue.multiline}
                            rows={keyValue.rows}
                            type={keyValue.type}
                            placeholder={keyValue.placeholder}
                            disabled={keyValue?.disabled}
                            uniqueText={keyValue.uniqueText}
                            requiredField={keyValue.requiredField}
                            // customClass="textBox"
                            // customClass={keyValue.customClass}
                            defaultValue={keyValue.defaultValue}
                            resetValue={resetValue}
                          />
                        </Grid>
                      )}

                      {keyValue?.isFileUploader && (
                        <Grid
                          item
                          md={12}
                          sm={12}
                          xs={12}
                          my={2}
                          mx={2}
                          className="circleLogoBox"
                        >
                          <CustomFileUploader
                            // handleChange={handleChange}

                            handleChange={(e) => {
                              onChange(e);
                              handleChange(e);
                              // handleUpload(e);
                            }}
                            Image={image}
                            value={value}
                            regForm={keyValue.regForm}
                            defaultImage={keyValue.defaultImage}
                            resetValue={resetValue}
                          />
                        </Grid>
                      )}
                      {keyValue?.isPasswordInput && (
                        <Grid
                          className="textInputWidth"
                          item
                          md={12}
                          sm={12}
                          xs={12}
                          my={2}
                          mx={2}
                        >
                          <CustomTextField
                            label={keyValue.label}
                            onHandleChange={(e) => {
                              onChange(e);
                              // textFieldChange(e, keyValue.name);
                            }}
                            value={value}
                            multiline={keyValue.multiline}
                            rows={keyValue.rows}
                            type={keyValue.type}
                            placeholder={keyValue.placeholder}
                            disabled={keyValue?.disabled}
                            uniqueText={keyValue.uniqueText}
                            requiredField={keyValue.requiredField}
                            // customClass="textBox"
                            customClass={keyValue.customClass}
                            defaultValue={keyValue.defaultValue}
                            resetValue={resetValue}
                            // textInputIcon={true}
                          />{" "}
                          {errors &&
                            errors[keyValue?.name]?.type === "validate" && (
                              <CustomTypography
                                text={`${keyValue?.label} not match`}
                                type="error"
                              />
                            )}
                        </Grid>
                      )}
                      {keyValue?.isRadioAction && (
                        <Grid
                          item
                          textAlign={"left"}
                          md={12}
                          sm={12}
                          xs={12}
                          my={2}
                          mx={2}
                        >
                          <CustomTypography
                            type="header"
                            text={keyValue.text}
                            customClass={keyValue.customClass}
                            colorType={keyValue.colorType}
                          />
                          <CustomRadioButton
                            labelText={keyValue.label}
                            onChange={(e) => {
                              onChange(e);
                              // onChangeRadioAction(e, keyValue.name);
                            }}
                            value={value}
                            data={keyValue.radioButtonData}
                            requiredField={keyValue.requiredField}
                            defaultValue
                            customClass={keyValue.customClass}
                          />
                        </Grid>
                      )}
                    </>
                  )}
                />
                {errors && errors[keyValue?.name]?.type === "required" && (
                  <Grid>
                    <CustomTypography
                      text={`${keyValue?.label} is Required`}
                      type="error"
                    />
                  </Grid>
                )}
                {errors && errors[keyValue?.name]?.type === "pattern" && (
                  <Grid>
                    <CustomTypography
                      text={`${keyValue?.label} is Invalid`}
                      type="error"
                    />
                  </Grid>
                )}
              </Grid>
            ))}
          </Grid>
          <Grid
            container
            md={12}
            lg={12}
            sm={12}
            xs={12}
            display="inline-flex"
            justifyContent="space-around"
            pt={"60px"}
          >
            <Grid item xs={5}></Grid>
            <Grid item>
              <CustomButton
                btnTitle="Next"
                variant="contained"
                color="primary"
                btnStyles={{
                  color: "#fff",
                  background: "#f85a47",
                  width: {
                    lg: "250px",
                    md: "200px",
                    sm: "150px",
                    xs: "200px",
                  },
                  fontSize: "17px",
                  fontFamily: "Poppins_Medium",
                }}
                onClickHandle={handleSubmit(onSubmit)}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="text primary button group"
          style={{ marginTop: 10 }}
        >
          <Button onClick={() => value.prevPage()} style={{ margin: 25 }}>
          Previous
        </Button> 
          <Button
            disabled={!btnDisbaled}
            onClick={() => {
              value.nextPage() &&
               handleSubmit(onSubmit);
            }}
            style={{ margin: 10 }}
          >
            {console.log(value, "vvvvvv")}Next
          </Button>
        </ButtonGroup> */}
      </Grid>
    </>
  );
};
export default PHBBasicDetails;
