import React, { useContext } from "react";
import { LabelContext } from "../../Pages/PetService/LableData";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Controller, useForm } from "react-hook-form";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import MultipleSelectChip from "../../Components/MultipleDropdown/MultipleDropdown";
import CustomTextField from "../../Components/TextField/TextField";
import CustomImageUploader from "../../Components/FileUploader/FileUpload";
import CustomIcons from "../../Utils/Icons/Index";
import CustomTypography from "../../Components/Typography/Typography";
import CustomRadioButton from "../../Components/RadioButton/RadioButton";
import CustomButton from "../../Components/Button/Button";
import CustomSelect from "../../Components/Select/Select";
import CustomProfileUploader from "../ProfileUploader/ProfileUpload";
import CustomForm from "../CustomForm/CustomForm";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../Redux/Actions";
import FBEditor from "../../Components/TextEditor/TextEditor";
import {
  AboutPetEntries,
  DefaultAboutPetValues,
} from "../../Pages/PetService/AboutPetEntries";
import "./style.css";
import CustomMultiFileUploader from "../FileUploader/MultipleFileUploader";
import { base64ToBinary } from "../../Redux/Helpers";

const AboutPet = (props) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    DefaultAboutPetValues,
  });

  const aboutPet = useSelector((state) => state?.aboutPet);

  const [upload, setUpload] = React.useState(null);
  const getImage = (val) => {
    setUpload(val);
    console.log(val, "val");
  };

  const [values, setValues] = React.useState([]);

  const onSelectValue = (data) => {
    setValues(data);
  };
  const handleDelete = (e, value) => {
    e.preventDefault();
    setValues(values.filter((name) => name !== value));
  };

  const [resetValue, setResetValue] = React.useState([]);
  const value = useContext(LabelContext);
  const receiver = value.labelInfo?.receiver;
  console.log(receiver, "valkjndjhfdjiue");

  const btnDisabled =
    receiver.professional_status?.length > 0 &&
    receiver.tell_us_somthing_about_you?.length > 0 &&
    receiver.years_of_experience?.length > 0 &&
    receiver.service_provider_type?.length > 0 &&
    receiver.service_provider_for?.length > 0 &&
    receiver.no_of_pets?.length > 0 &&
    receiver.grooming_kit?.length > 0 &&
    receiver.mobile_grooming_van?.length > 0 &&
    receiver.hair_dryer?.length > 0 &&
    receiver.hair_shampoo?.length > 0 &&
    receiver.carry_towel?.length > 0 &&
    receiver.grooming_assistant?.length > 0 &&
    receiver.service_overview?.length > 0 &&
    receiver.doorstep_services?.length > 0 &&
    receiver.location?.length > 0 &&
    receiver.photos?.length > 0;

  const faq_value = [
    {
      pet_service: [
        {
          question: "what kind of services?",
          answer: "many",
        },
        {
          question: "service name?",
          answer: "walking",
        },
      ],
    },
  ];

  const onSubmit = (data1) => {
    console.log(data1, "checkdata");
    const formData = new FormData();
    formData.append("professional_status", data1.professional_status);
    formData.append(
      "tell_us_somthing_about_you",
      data1.tell_us_somthing_about_you
    );
    formData.append("years_of_experience", data1.years_of_experience);
    formData.append("service_provider_type", data1.service_provider_type);
    formData.append("service_provider_for", data1.service_provider_for);
    // formData.append("no_of_pets", data1.no_of_pets);
    formData.append("no_of_pets", 1);
    formData.append("grooming_kit", data1.grooming_kit);
    formData.append("mobile_grooming_van", data1.mobile_grooming_van);
    formData.append("hair_dryer", data1.hair_dryer);
    formData.append("hair_shampoo", data1.hair_shampoo);
    formData.append("carry_towel", data1.carry_towel);
    formData.append("grooming_assistant", data1.grooming_assistant);
    formData.append("service_overview", data1.service_overview);
    formData.append("doorstep_services", data1.doorstep_services);
    formData.append("location", data1.location);
    data1.photos.forEach((photo, index) => {
      const base64String = photo.replace(/^data:image\/(png|jpeg);base64,/, "");
      const binaryData = base64ToBinary(base64String);
      formData.append(`photos`, new Blob([binaryData], { type: "image/jpeg" }));
    });
    // formData.append("photos", data1.photos[0]);
    // formData.append("service_faq", [faq_value.pet_service]);
    formData.append("service_master_id", 1);
    formData.append("pet_service_id", 1);
    const serviceFaqJson = JSON.stringify(faq_value);

    formData.append("service_faq", serviceFaqJson);
    const data = {
      data: formData,
      method: "post",
      apiName: "createPetServiceAboutYou",
    };
    console.log(data1, "checkdata");

    dispatch(actions.ABOUTPET(data));
  };
  React.useEffect(() => {
    if (aboutPet?.aboutPet?.message === "SUCCESS") {
      value.nextPage();
    }
  }, [aboutPet, value]);

  return (
    <form>
      <h4> Become a Pet Service Provider</h4>
      <h5> Share these details which describe you as a pet grooming.</h5>

      <Grid>
        {/* <CustomForm
          AllEntries={AboutPetEntries}
          onChangeRadioAction={value.handleOnChange}
          textFieldChange={value.handleChange}
          // onReceiveData={onReceiveData}
          defaultValues={DefaultAboutPetValues}
        /> */}
        {AboutPetEntries?.map((keyValue) => (
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
                        // resetValue={resetValue}
                      />
                    </Grid>
                  )}
                  {keyValue?.isDropdown && (
                    <Grid item md={12} my={2} mx={2} sm={12} xs={12}>
                      <CustomSelect
                        label={keyValue?.label}
                        labelText={keyValue.labelText}
                        handleChange={onChange}
                        value={value}
                        data={keyValue.DropdownData}
                        requiredField={keyValue.requiredField}
                        // placeholder={keyValue.placeholder}
                      />
                    </Grid>
                  )}
                  {/* {keyValue?.isProfileImageUploader && (
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
                  )} */}
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
                  {/* {keyValue?.isFileUploader && (
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
                  )} */}
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

      <CustomTypography variant="h4" text="FAQ's about your service" />

      <Grid item md={12} sm={12} lg={12} xs={12} pl={2}>
        <Grid pt={1}>
          <CustomTypography
            text="Question"
            type="header"
            customClass="FaqQuestion"
          />
        </Grid>
        <FBEditor />
      </Grid>
      <Grid item md={12} sm={12} lg={12} xs={12} pl={2}>
        <Grid pt={1}>
          <CustomTypography
            text="Answer"
            type="header"
            customClass="FaqQuestion"
          />
        </Grid>
        <FBEditor />
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
      {/* <Grid className="btn_align_edit">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="text primary button group"
          style={{ marginTop: 15 }}
        >
          <Button
            disabled={!btnDisabled}
            onClick={() => value.nextPage()}
            // style={{ margin: 25 }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Grid> */}
    </form>
  );
};
export default AboutPet;
