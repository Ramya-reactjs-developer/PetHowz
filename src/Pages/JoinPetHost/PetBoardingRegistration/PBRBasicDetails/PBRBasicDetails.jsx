import { Grid } from "@mui/material";
import React from "react";
import {
  DefaultPBRBasicDetailsEntriesValues,
  PBRBasicDetailsEntries,
} from "./PBRBasicDetailsEntries";
import { Controller, useForm } from "react-hook-form";
import CustomTextField from "../../../../Components/TextField/TextField";
import CustomIcons from "../../../../Utils/Icons/Index";
import CustomImageUploader from "../../../../Components/FileUploader/FileUpload";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import CustomTypography from "../../../../Components/Typography/Typography";
import CustomRadioButton from "../../../../Components/RadioButton/RadioButton";
import CustomButton from "../../../../Components/Button/Button";

export const PBRBasicDetails = (props) => {
  const dispatch = useDispatch();

  const defaultValues = DefaultPBRBasicDetailsEntriesValues;
  const [state, setstate] = React.useState();
  console.log(state, "state");
  const [resetValue, setResetValue] = React.useState([]);
  //   const userGet = useSelector((state) => state?.registertopethowz);
  //   console.log(userGet, "userget");
  const {
    textFieldChange,
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    DefaultPBRBasicDetailsEntriesValues,
  });
  const navigate = useNavigate();
  function onSubmit(data1) {
    // const formData = new FormData();
    // formData.append("name", data1.name);
    // formData.append("mobile_number", data1.mobile_number);
    // formData.append("gender", data1.gender);
    // formData.append("email", data1.email);
    // formData.append("password", data1.password);
    // formData.append("image", data1.image[0]);
    // const data = {
    //   data: formData,
    //   method: "post",
    //   apiName: "createRegistration",
    // };
    // console.log(data1, "checkdata");
    // navigate("/AddAddress");
    // dispatch(actions.REGISTERTOPETHOWZ(data));
  }
  return (
    <Grid Container item xs={12}>
      <Grid item textAlign={"center"} sm={6} xs={12}>
        {/* <img src={CustomIcons.Logo} alt="logo" />
        <Box sx={{ pt: "20px" }}>
          <CustomTypography
            text="Register to Pethowz"
            type="heading3"
            colorType={"text"}
            customStyle={{ fontWeight: "Bold" }}
          />
        </Box> */}
        {/* <CustomForm
          AllEntries={RegisterEntries}
          defaultValues={DefaultRegisterEntriesValues}
          onReceiveData={onReceiveData}
        /> */}

        {/* manual customform */}
        <Grid container className="NewsBorder" md={12}>
          {PBRBasicDetailsEntries?.map((keyValue) => (
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
                            textFieldChange(e, keyValue.name);
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
                fontFamily: " Roboto-Regular",
              }}
              onClickHandle={handleSubmit(onSubmit)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
