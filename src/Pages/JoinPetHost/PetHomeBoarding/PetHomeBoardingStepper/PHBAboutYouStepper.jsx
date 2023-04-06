import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { PetHomeBoardingContext } from "../PetHomeBoardingContext";
import { useDispatch, useSelector } from "react-redux";
import {
  DefaultPHBAboutYouValues,
  PHBAboutYouEntries,
} from "../PetHomeBoardingEntries.jsx/PHBAboutYouEntries";
import { Controller, useForm } from "react-hook-form";
import actions from "../../../../Redux/Actions";
import CustomTextField from "../../../../Components/TextField/TextField";
import CustomTypography from "../../../../Components/Typography/Typography";
import CustomRadioButton from "../../../../Components/RadioButton/RadioButton";
import CustomSelect from "../../../../Components/Select/Select";
import CustomButton from "../../../../Components/Button/Button";

const PHBAboutYou = (props) => {
  const dispatch = useDispatch();
  const userGet = useSelector((state) => state?.phbbasicdetails);
  const AboutYou = useSelector((state) => state?.phbaboutyou);
  console.log(userGet?.phbbasicdetails?.data.pet_space_id, "d");
  console.log(AboutYou, "lll");
  const defaultValues = DefaultPHBAboutYouValues;
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
    DefaultPHBAboutYouValues,
  });
  const value = useContext(PetHomeBoardingContext);
  const AV = value.labelInfo?.AboutYou;
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
    const formData = new FormData();
    formData.append("professional_status", data1.professional_status);
    formData.append("years_of_experience", data1.years_of_experience);
    formData.append(
      "tell_us_somthing_about_you",
      data1.tell_us_somthing_about_you
    );
    formData.append(
      "tell_us_about_the_type_of_pet_and_your_experience",
      data1.tell_us_about_the_type_of_pet_and_your_experience
    );
    formData.append("oral_medication", data1.oral_medication);
    formData.append("first_aid", data1.first_aid);
    formData.append("do_you_have_kids_at_home", data1.do_you_have_kids_at_home);
    formData.append(
      "do_you_have_other_pets_at_home",
      data1.do_you_have_other_pets_at_home
    );
    formData.append(
      "pet_space_id",
      userGet?.phbbasicdetails?.data.pet_space_id
    );
    const data = {
      data: formData,
      method: "post",
      apiName: "createPetBoardingAboutYou",
    };
    console.log(data1, "dddd");
    console.log(formData, "dddd1");

    dispatch(actions.PHBABOUTYOU(data));
  };
  React.useEffect(() => {
    if (AboutYou?.phbaboutyou?.message === "SUCCESS") {
      value.nextPage();
    }
  }, [userGet, AboutYou, value]);
  return (
    <form>
      <h4> Become a Pet Service Provider</h4>
      <h5>
        {" "}
        Share these details which describe you as a pet host/pet service
        provider.
      </h5>
      <Grid container className="NewsBorder" md={12}>
        {PHBAboutYouEntries?.map((keyValue) => (
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
export default PHBAboutYou;
