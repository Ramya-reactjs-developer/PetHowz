import React, { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import CustomTypography from "../../Components/Typography/Typography";
import "./CustomerRegistration.css";

import {
  DefaultRegisterEntriesValues,
  RegisterEntries,
} from "./RegisterEntries";
import CustomIcons from "../../Utils/Icons/Index";

import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import CustomTextField from "../../Components/TextField/TextField";
import CustomRadioButton from "../../Components/RadioButton/RadioButton";
import CustomButton from "../../Components/Button/Button";
import CustomImageUploader from "../../Components/FileUploader/FileUpload";
import actions from "../../Redux/Actions";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export const RegisterToPethowz = (props) => {
  const dispatch = useDispatch();
  const { state } = useLocation();
  const defaultValues = DefaultRegisterEntriesValues;
  // const [state, setstate] = React.useState();
  // console.log(state, "state");
  const [resetValue, setResetValue] = React.useState([]);
  const userGet = useSelector((state) => state?.registertopethowz);
  console.log(userGet, "userget");
  console.log(state, "stateReg");
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    DefaultRegisterEntriesValues,
  });
  const navigate = useNavigate();
  function onSubmit(data1) {
    const formData = new FormData();
    formData.append("name", data1.name);
    formData.append("mobile_number", data1.mobile_number);
    formData.append("gender", data1.gender);
    formData.append("email", data1.email);
    formData.append("password", data1.password);
    formData.append("image", data1.image[0]);
    const data = {
      data: formData,
      method: "post",
      apiName: "createRegistration",
    };
    console.log(data1, "checkdata");

    dispatch(actions.REGISTERTOPETHOWZ(data));
    reset(defaultValues);
    Swal.fire({
      title: "Registered Successfully",
      text: "Thank You",
      icon: "success",
      allowOutsideClick: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        navigate("/petHowz/AddAddress", { state: state });
      }
    });
  }

  // React.useEffect(() => {
  //   console.log(userGet?.registertopethowz?.message, "mmmm");
  //   if (userGet?.registertopethowz?.message === "SUCCESS") {
  //     // alert(state?.registertopethowz.data);

  //   }
  // }, [userGet]);
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  console.log(password, "password");
  console.log(confirmPassword, "confirmPassword");

  return (
    <Grid
      container
      item
      xs={12}
      height={{ xl: "120vh", lg: "120vh", md: "auto", sm: "auto", xs: "auto" }}
    >
      <Grid item textAlign={"center"} sm={6} xs={12}>
        {/* <img src={CustomIcons.Logo} alt="logo" /> */}
        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Register to Pethowz"
            type="heading3"
            colorType={"text"}
            customStyle={{ fontWeight: "Bold" }}
          />
        </Box>
        {/* <CustomForm
          AllEntries={RegisterEntries}
          defaultValues={DefaultRegisterEntriesValues}
          onReceiveData={onReceiveData}
        /> */}

        {/* manual customform */}
        <Grid container className="NewsBorder" textAlign={"left"} md={12}>
          {RegisterEntries?.map((keyValue) => (
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
                          // uniqueText={keyValue.uniqueText}
                          requiredField={keyValue.requiredField}
                          // customClass="textBox"
                          customClass={keyValue.customClass}
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
                        <CustomImageUploader
                          upLoad={CustomIcons.LogoUploader}
                          label={keyValue.label}
                          // onHandleChange={(e) => {
                          //   onChange(e);
                          //   props.textFieldChange(e, keyValue.name);
                          // }}
                          customClass={keyValue.customClass}
                          getImage={(val) => {
                            onChange(val);
                            // getImage(val);
                            props.textFieldChange(val, keyValue.name);
                          }}
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
                        {/* {errors &&
                          errors[keyValue?.name]?.type === "validate" && (
                            <CustomTypography
                              text={`${keyValue?.label} not match`}
                              type="error"
                            />
                          )} */}
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
      <Grid item textAlign={"center"} className="Box-Image" sm={6} xs={12}>
        <div className="Box-color"></div>
      </Grid>
    </Grid>
  );
};
