// import React, { useContext } from "react";
// // import { LabelContext } from "../../Pages/JoinPetHost/petHost/labelDataContext";
// import { LabelContext } from "../../Pages/PetService/LableData";
// import Button from "@material-ui/core/Button";
// import ButtonGroup from "@material-ui/core/ButtonGroup";
// import {
//   BasicDetailsEntries,
//   DefaultBasicDetailsValues,
// } from "../../Pages/PetService/BasicDetailsEntries";
// import CustomForm from "../CustomForm/CustomForm";
// import { Grid } from "@mui/material";
// import "./style.css";

// const PetBasicDetails = (props) => {
//   const value = useContext(LabelContext);
//   const sender = value.labelInfo?.sender;
//   console.log(value, "sender");
  


//   const btnDisabled =
//     sender.firstText?.length > 0 &&
//     sender.SecondText?.length > 0 &&
//     sender.ThirdText?.length > 0 &&
//     sender.fourthText?.length > 0 &&
//     sender.fifthText?.length > 0 &&
//     sender.sixthText?.length > 0 &&
//     sender.seventhText?.length > 0 &&
//     sender.pin_code?.length > 0 &&
//     sender.fileUploader?.length > 0 &&
//     sender.location?.length > 0;
//   console.log(btnDisabled, "btnDisbaled");

//   return (
//     <form>
//       <h4> Become a Pet Service Provider</h4>
//       <h5> Fill up details the pet boarding</h5>

//       <Grid>
//         <CustomForm
//           AllEntries={BasicDetailsEntries}
//           textFieldChange={value.handleChange}
//           // onReceiveData={onReceiveData}
//           defaultValues={DefaultBasicDetailsValues}
//         />
//       </Grid>
//       <Grid className="btn_align_edit">
//         <ButtonGroup
//           variant="contained"
//           color="primary"
//           aria-label="text primary button group"
//           style={{ marginTop: 15 }}
//         >
//           <Button
//             disabled={!btnDisabled}
//             onClick={() => value.nextPage()}
//             // style={{ margin: 25 }}
//           >
//             Next
//           </Button>
//         </ButtonGroup>
//       </Grid>
//     </form>
//   );
// };
// export default PetBasicDetails;

import React, { useContext } from "react";
import {
  BasicDetailsEntries,
  DefaultBasicDetailsValues,
} from "../../Pages/PetService/BasicDetailsEntries";
import { Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LabelContext } from "../../Pages/PetService/LableData";
// import { PetHomeBoardingContext } from "../PetHomeBoardingContext";
import CustomTextField from "../../Components/TextField/TextField";
import CustomImageUploader from "../../Components/FileUploader/FileUpload";
import CustomIcons from "../../Utils/Icons/Index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomRadioButton from "../../Components/RadioButton/RadioButton";
import CustomButton from "../../Components/Button/Button";
// import CustomForm from "../../../../Components/CustomForm/CustomForm";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions";
import CustomProfileUploader from "../ProfileUploader/ProfileUpload";

const PetBasicDetails = (props) => {
  const dispatch = useDispatch();
  const userGet = useSelector((state) => state?.phbbasicdetails);
  const login = useSelector((state) => state?.login);
  console.log(login, "login");

  const [resetValue, setResetValue] = React.useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    DefaultBasicDetailsValues,
  });
  const value = useContext(LabelContext);
    const sender = value.labelInfo?.sender;

  console.log(sender, "manoj");

  // const pg = value.page;
  const btnDisbaled =
    sender.pet_service_name?.length > 0 &&
    sender.name?.length > 0 &&
    sender.mobile_number?.length > 0 &&
    sender.street?.length > 0 &&
    sender.city?.length > 0 &&
    sender.locality?.length > 0 &&
    sender.state?.length > 0 &&
    sender.pin_code?.length > 0 &&
    sender.image?.length > 0 &&
    sender.pin_location?.length > 0;

  const onSubmit = (data1) => {
    console.log(data1, "checkdata");
    const formData = new FormData();
    formData.append("pet_service_name", data1.pet_service_name);
    formData.append("name", data1.name);
    formData.append("mobile_number", data1.mobile_number);
    formData.append("street", data1.street);
    formData.append("city", data1.city);
    formData.append("locality", data1.locality);
    formData.append("image", data1.image[0]);
    formData.append("state", data1.state);
    formData.append("pin_code", data1.pin_code);
    formData.append("pin_location", data1.pin_location);
    formData.append("service_master_id", 1);
    formData.append("user_id", 1);
    const data = {
      data: formData,
      method: "post",
      apiName: "createPetServiceBasicDetails",
    };
    console.log(data1, "checkdata");

    dispatch(actions.PHBBASICDETAILS(data));
  };
  React.useEffect(() => {
    if (userGet?.phbbasicdetails?.message === "SUCCESS") {
      value.nextPage();
    }
  }, [userGet, value]);
  // const onNext = () => {
  //   if (userGet?.phbbasicdetails?.message !== "") {
  //     value.nextPage();
  //   }
  // };
const [upload, setUpload] = React.useState(null);
    const getImage = (val) => {
      setUpload(val);
      console.log(val, "val");
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
            {BasicDetailsEntries?.map((keyValue) => (
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
                            customClass={keyValue.customClass}
                            defaultValue={keyValue.defaultValue}
                            resetValue={resetValue}
                          />
                        </Grid>
                      )}
                      {keyValue?.isProfileImageUploader && (
                        <Grid
                          item
                          md={12}
                          sm={12}
                          my={2}
                          mx={2}
                          xs={12}
                          className="circleLogoBox"
                        >
                          <CustomProfileUploader
                            upLoad={CustomIcons.LogoUploader}
                            label={keyValue.label}
                            // onHandleChange={(e) => {
                            //   onChange(e);
                            //   props.textFieldChange(e, keyValue.name);
                            // }}
                            customClass={keyValue.customClass}
                            getImage={(val) => {
                              onChange(val);
                              getImage(val);
                              props.textFieldChange(val, keyValue.name);
                            }}
                            regForm={keyValue.regForm}
                            defaultImage={keyValue.defaultImage}
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
export default PetBasicDetails;

