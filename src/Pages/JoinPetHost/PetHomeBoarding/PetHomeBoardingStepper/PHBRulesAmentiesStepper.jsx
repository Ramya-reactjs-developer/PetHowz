import { useDispatch, useSelector } from "react-redux";
import {
  DefaultPHBRulesAmentiesValues,
  PHBRulesAmentiesEntries,
} from "../PetHomeBoardingEntries.jsx/PHBRulesAmentiesEntries";
import { Controller, useForm } from "react-hook-form";
import React, { useContext } from "react";
import { PetHomeBoardingContext } from "../PetHomeBoardingContext";
import actions from "../../../../Redux/Actions";
import { Grid, Typography } from "@mui/material";
import CustomTextField from "../../../../Components/TextField/TextField";
import CustomTypography from "../../../../Components/Typography/Typography";
import CustomRadioButton from "../../../../Components/RadioButton/RadioButton";
import CustomButton from "../../../../Components/Button/Button";
import { PHBAboutYouEntries } from "../PetHomeBoardingEntries.jsx/PHBAboutYouEntries";
import CheckboxLabels from "../../../../Components/CheckBox/CheckBox";
import MultiCheckboxLabels from "../../../../Components/CheckBox/MultiCheckBox";
import Swal from "sweetalert2";
import { phbrulesamentiesAction } from "../../../../Redux/Slices/PetHomeBoardingSlice/PHBRulesAmentiesSlice";

const PHBRulesAmenties = () => {
  const dispatch = useDispatch();
  const userGet = useSelector((state) => state?.phbbasicdetails);
  const rulesAmenties = useSelector((state) => state?.phbrulesamenties);
  console.log(userGet.phbbasicdetails.message, "userGet");
  console.log(rulesAmenties?.phbrulesamenties?.message, "phbrulesamenties");
  const defaultValues = DefaultPHBRulesAmentiesValues;
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
    DefaultPHBRulesAmentiesValues,
  });
  const value = useContext(PetHomeBoardingContext);
  const pet_space_id = localStorage.getItem("pet_space_id");
  const onSubmit = (data1) => {
    console.log(data1, "checkdata");

    const formData = new FormData();

    formData.append(
      "do_you_have_deticated_boardng_area_for_pets",
      data1.do_you_have_deticated_boardng_area_for_pets
    );
    formData.append(
      "do_you_have_a_playing_area_for_pets",
      data1.do_you_have_a_playing_area_for_pets
    );
    formData.append(
      "do_you_ac_in_pet_sleeping_area",
      data1.do_you_ac_in_pet_sleeping_area
    );
    formData.append(
      "do_you_have_cctv_at_your_boarding_space",
      data1.do_you_have_cctv_at_your_boarding_space
    );
    formData.append(
      "do_you_have_openspace_at_your_boarding_space",
      data1.do_you_have_openspace_at_your_boarding_space
    );
    formData.append("do_you_provide_first_aid", data1.do_you_provide_first_aid);
    formData.append("pets_allowed_on_beds", data1.pets_allowed_on_beds);
    formData.append(
      "pets_allowed_on_furniture",
      data1.pets_allowed_on_furniture
    );
    formData.append("pet_should_be_vaccinated", data1.pet_should_be_vaccinated);
    formData.append(
      "pet_should_be_potty_trained",
      data1.pet_should_be_potty_trained
    );
    formData.append("cuddle_time", data1.cuddle_time);
    formData.append("walking", data1.walking);
    formData.append("play_time", data1.play_time);
    formData.append(
      "dedicated_pet_sitter_during_boarding_time",
      data1.dedicated_pet_sitter_during_boarding_time
    );
    formData.append(
      "periodic_update_about_pets",
      data1.periodic_update_about_pets
    );
    formData.append(
      "meals_included_in_boarding_charges",
      data1.meals_included_in_boarding_charges
    );
    formData.append("meal_type", JSON.stringify(data1.meal_type));
    formData.append(
      "what_you_provide_in_meals_as_your_boarding",
      data1.what_you_provide_in_meals_as_your_boarding
    );
    formData.append(
      "panything_else_is_provided",
      data1.anything_else_is_provided
    );

    formData.append("pet_space_id", pet_space_id);
    const data = {
      data: formData,
      method: "post",
      apiName: "createPetBoardingRulesAmenities",
    };
    console.log(data1, "checkdata");

    dispatch(actions.PHBRULESAMENTIES(data));
    setResetValue(defaultValues);
  };
  console.log(userGet?.phbbasicdetails?.data.pet_space_id, "id");
  React.useEffect(() => {
    // if (rulesAmenties?.phbrulesamenties?.message === "SUCCESS" &&  value.page === 3) {
    //   Swal.fire(
    //     "Rules & Amenties Added Successfully",
    //     "Thank You",
    //     "success"
    //   ).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //       value.nextPage();
    //     }
    //   });
    // }
    if (
      rulesAmenties?.phbrulesamenties?.data?.message === "SUCCESS" &&
      value.page === 3
    ) {
      setResetValue(defaultValues);
      dispatch(phbrulesamentiesAction.reset());
      value.nextPage();
      localStorage.setItem("pages",value.page+1)
    }
  }, [userGet, value, rulesAmenties]);
  // const onNext = () => {
  //   if (userGet?.phbbasicdetails?.message !== "") {
  //     value.nextPage();
  //   }
  // };
  return (
    <form>
      <h4 className="fontFamilyEdit"> Become a Pet Service Provider</h4>
      {/* <h5> Fill up details about the pet boarding</h5> */}
      <Grid container className="NewsBorder" md={12}>
        {PHBRulesAmentiesEntries?.map((keyValue) => (
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
                  {keyValue?.isCheckBoxAction && (
                    <Grid
                      item
                      md={12}
                      my={2}
                      mx={2}
                      sm={12}
                      xs={12}
                      className="checkboxRow"
                    >
                      <MultiCheckboxLabels
                        data={keyValue?.checkBoxData}
                        onChange={onChange}
                        value={value}
                        disabled={keyValue.disabled}
                        labelText={keyValue.label}
                        requiredField={keyValue.requiredField}
                        id={keyValue.id}
                        forWidth={keyValue.forWidth}
                      />
                    </Grid>
                  )}
                  {keyValue?.isCustomTypography && (
                    <Grid item md={12} sm={12} xs={12}>
                      <CustomTypography
                        type="header"
                        text={keyValue.text}
                        customStyle={{ fontWeight: "700" }}
                        // customClass={keyValue.customClass}
                        colorType={"text"}
                      />
                      <CustomTypography
                        type="title"
                        colorType={keyValue.colorType1}
                        text={keyValue.text2}
                        customClass={keyValue.customClass1}
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
              fontFamily: " Roboto-Regular",
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
export default PHBRulesAmenties;
