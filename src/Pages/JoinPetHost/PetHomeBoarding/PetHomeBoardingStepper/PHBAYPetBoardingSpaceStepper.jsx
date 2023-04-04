import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";

import CustomButton from "../../../../Components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  DefaultPHBAYPetBoardingSpaceValues,
  PHBAYPetBoardingSpaceEntries,
} from "../PetHomeBoardingEntries.jsx/PHBAYPetBoardingSpaceEntries";
import { Controller, useForm } from "react-hook-form";
import { PetHomeBoardingContext } from "../PetHomeBoardingContext";
import actions from "../../../../Redux/Actions";
import CustomTextField from "../../../../Components/TextField/TextField";
import CustomTypography from "../../../../Components/Typography/Typography";
import CustomRadioButton from "../../../../Components/RadioButton/RadioButton";
import CustomIcons from "../../../../Utils/Icons/Index";
import MultipleSelectChip from "../../../../Components/MultipleDropdown/MultipleDropdown";
import { base64ToBinary } from "../../../../Redux/Helpers";
import CustomMultiFileUploader from "../../../../Components/FileUploader/MultipleFileUploader";

const PHBAYPetBoardingSpace = (props) => {
  const dispatch = useDispatch();
  const userGet = useSelector((state) => state?.phbbasicdetails);
  const AboutYou = useSelector((state) => state?.phbaboutyou);
  const AYPetSpace = useSelector((state) => state?.phbaypetspace);
  console.log(userGet?.phbbasicdetails?.data.pet_space_id, "d");
  console.log(AboutYou, "lll");
  const defaultValues = DefaultPHBAYPetBoardingSpaceValues;
  const [state, setstate] = React.useState();
  console.log(state, "state");
  const [resetValue, setResetValue] = React.useState([]);
  const [values, setValues] = React.useState([]);
  const [selectedFiles, setSelectedFiles] = React.useState([]);
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    DefaultPHBAYPetBoardingSpaceValues,
  });
  // console.log(selectedFiles, "selectedFiles");
  // const handleFileSelect = (e) => {
  //   alert("slect");
  //   const files = e.target.files;
  //   if (files.length < 4 || files.length > 50) {
  //     alert("Please select between 4 and 50 photos.");
  //     setSelectedFiles([]);
  //     return;
  //   } else {
  //     setSelectedFiles([...selectedFiles, ...files]);
  //   }
  // };
  // const handleDeleteImage = (index) => {
  //   const files = [...selectedFiles];
  //   files.splice(index, 1);
  //   setSelectedFiles(files);
  // };
  const onSelectValue = (data) => {
    setValues(data);
  };
  const handleDelete = (e, value) => {
    e.preventDefault();
    setValues(values.filter((name) => name !== value));
  };
  const value = useContext(PetHomeBoardingContext);
  const AV = value.labelInfo?.AYPetSpace;
  console.log(AV, "valkjndjhfdjiue");

  const btnDisabled =
    // receiver.professional_status?.length > 0 &&
    AV.tell_us_something_about_you_and_your_passion_towards_pet?.length > 0 &&
    AV.tell_us_about_the_type_of_pet_you_have_and_your_experience?.length > 0 &&
    AV.tell_us_about_the_type_of_pet_you_have_and_your_experience_two?.length >
      0 &&
    AV.can_provide_oral_medication?.length > 0 &&
    AV.can_you_provide_first_aid?.length > 0;

  const onSubmit = (data1) => {
    console.log(data1, "checkdata");
    // data1.categoryOfPetBoarded.forEach((value) => {
    //   formData.append("category_of_pet_boarded[]", value);
    // });

    const formData = new FormData();
    //  data1.photos.forEach((photo, index) => {
    //    const base64String = photo.replace(/^data:image\/(png|jpeg);base64,/, "");
    //    const binaryData = base64ToBinary(base64String);
    //    formData.append(`photos`, new Blob([binaryData], { type: "image/jpeg" }));
    //  });

    data1.photos.forEach((photo, index) => {
      const base64String = photo.replace(/^data:image\/(png|jpeg);base64,/, "");
      const binaryData = base64ToBinary(base64String);
      formData.append(`photos`, new Blob([binaryData], { type: "image/jpeg" }));
    });

    formData.append("type_of_boarding", data1.type_of_boarding);
    formData.append("category_of_pet_boarded", [data1.category_of_pet_boarded]);

    formData.append("no_of_pets", data1.no_of_pets);
    formData.append(
      "total_sq_feet_of_the_space",
      data1.total_sq_feet_of_the_space
    );
    formData.append(
      "price_for_per_day_boarding",
      data1.price_for_per_day_boarding
    );
    formData.append("price_for_day_care", data1.price_for_day_care);
    formData.append("no_of_bedrooms", data1.no_of_bedrooms);
    formData.append(
      "how_many_pets_can_you_host_at_max",
      data1.how_many_pets_can_you_host_at_max
    );
    // formData.append("photos", data1.photos[0]);
    formData.append(
      "pet_space_id",
      userGet?.phbbasicdetails?.data.pet_space_id
    );

    const data = {
      data: formData,
      method: "post",
      apiName: "createPetBoardingDetails",
    };
    console.log(data1, "dddd");
    console.log(formData, "dddd1");

    dispatch(actions.PHBAYPETSPACE(data));
  };
  React.useEffect(() => {
    if (AYPetSpace?.phbaypetspace?.message === "SUCCESS") {
      value.nextPage();
    }
  }, [userGet, AboutYou, AYPetSpace, value]);

  console.log(AYPetSpace?.phbaypetspace?.message, "sucess");
  return (
    <form>
      <h4> Become a Pet Service Provider</h4>
      <h5>
        {" "}
        Share these details which describe you as a pet host/pet service
        provider.
      </h5>
      <Grid container className="NewsBorder" md={12}>
        {PHBAYPetBoardingSpaceEntries?.map((keyValue) => (
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
                      {/* <MultiImageUploader
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
                      /> */}
                      <CustomMultiFileUploader
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
                  {keyValue?.isMultipleSelectChip && (
                    <Grid item md={12} my={2} mx={2} sm={12} xs={12}>
                      <MultipleSelectChip
                        onSelectValue={(e) => {
                          onChange(e);
                          onSelectValue(e, keyValue.name);
                        }}
                        selectValue={value}
                        onChipClose={(e, val) => handleDelete(e, val)}
                        label={keyValue.label}
                        labelText={keyValue.labelText}
                        dropDownList={keyValue.DropdownData}
                        requiredField={keyValue.requiredField}
                      />
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

      {/* <Grid>
        <CustomForm
          AllEntries={PHBAboutYouEntries}
          onChangeRadioAction={value.handleOnChange}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultPHBAboutYouValues}
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
      </ButtonGroup> */}
    </form>
  );
};
export default PHBAYPetBoardingSpace;
