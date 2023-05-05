import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import { PetHomeBoardingContext } from "../PetHomeBoardingContext";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import actions from "../../../../Redux/Actions";
import CustomTextField from "../../../../Components/TextField/TextField";
import CustomTypography from "../../../../Components/Typography/Typography";
import CustomButton from "../../../../Components/Button/Button";
import {
  DefaultPHBAddOnsValues,
  PHBAddOnsEntries,
} from "../PetHomeBoardingEntries.jsx/PHBAddOnsEntries";
import CustomIcons from "../../../../Utils/Icons/Index";
import { useNavigate } from "react-router";
import CustomSingleUploader from "../../../../Components/FileUploader/SingleUploader";

const PHBAddOns = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userGet = useSelector((state) => state?.phbbasicdetails);
  const AboutYou = useSelector((state) => state?.phbaboutyou);
  const AddOns = useSelector((state) => state?.phbaddons);
  console.log(userGet?.phbbasicdetails?.data.pet_space_id, "d");
  console.log(AboutYou, "lll");
  const defaultValues = DefaultPHBAddOnsValues;
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
    DefaultPHBAddOnsValues,
  });
  const value = useContext(PetHomeBoardingContext);
  const pet_space_id = localStorage.getItem("pet_space_id");
  const onAdd = (data1) => {
    console.log(data1, "checkdata");

    const formData = new FormData();
    formData.append("package_name", data1.package_name);
    formData.append("included", data1.included);
    formData.append("description", data1.description);
    formData.append("rate", data1.rate);
    formData.append("images", data1.images[0]);

    formData.append("pet_space_id", pet_space_id);
    const data = {
      data: formData,
      method: "post",
      apiName: "createPetBoardingAddOns",
    };
    console.log(data1, "dddd");
    console.log(formData, "dddd1");

    dispatch(actions.PHBADDONS(data));
    setResetValue(defaultValues);
  };
  const onSubmit = (data1) => {
    console.log(data1, "checkdata");

    const formData = new FormData();
    formData.append("package_name", data1.package_name);
    formData.append("included", data1.included);
    formData.append("description", data1.description);
    formData.append("rate", data1.rate);
    formData.append("images", data1.images[0]);

    formData.append(
      "pet_space_id",
      userGet?.phbbasicdetails?.data.pet_space_id
    );
    const data = {
      data: formData,
      method: "post",
      apiName: "createPetBoardingAddOns",
    };
    console.log(data1, "dddd");
    console.log(formData, "dddd1");

    dispatch(actions.PHBADDONS(data));
    setResetValue(data1);
  };

  React.useEffect(() => {
    console.log(resetValue, "reset");
    // if (
    //   AddOns?.phbaddons?.message === "SUCCESS" &&
    //   resetValue.package_name !== "" &&
    //   value.page === 4
    // ) {
    //   Swal.fire("Addons Added Successfully", "Thank You", "success").then(
    //     (result) => {
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         navigate("/petHowz/HostLayout/HostDashBoard");
    //       }
    //     }
    //   );
    // } else if (
    //   AddOns?.phbaddons?.message === "SUCCESS" &&
    //   resetValue.package_name === "" &&
    //   value.page === 4
    // ) {
    //   Swal.fire(
    //     "Addons Added Successfully",
    //     "Add Another Package",
    //     "success"
    //   ).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //       setResetValue();
    //     }
    //   });
    // }

    if (
      AddOns?.phbaddons?.message === "SUCCESS" &&
      resetValue.package_name !== "" &&
      value.page === 4
    ) {
      setResetValue();
      navigate("/petHowz/HostLayout/HostDashBoard");
    } else if (
      AddOns?.phbaddons?.message === "SUCCESS" &&
      resetValue.package_name === "" &&
      value.page === 4
    ) {
      setResetValue();
    }
  }, [userGet, AboutYou, value, AddOns]);
  return (
    <form>
      <h4> Become a Pet Service Provider</h4>
      <h5>
        {" "}
        Share these details which describe you as a pet host/pet service
        provider.
      </h5>
      <Grid container className="NewsBorder" md={12}>
        {PHBAddOnsEntries?.map((keyValue) => (
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
                      <CustomSingleUploader
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
        alignItems={"center"}
        justifyContent={"flex-end"}
        pt={"30px"}
      >
        <Grid item xs={6}></Grid>
        <Grid item xs={3}>
          To Create Another Package
        </Grid>
        <Grid
          item
          xs={3}
          // display="inline-flex"
          // alignItems={"center"}
          // justifyContent="space-evenly"
        >
          {" "}
          <CustomButton
            btnTitle="Click Here"
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
            onClickHandle={handleSubmit(onAdd)}
          />
        </Grid>
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
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <CustomButton
            btnTitle="Save & Submit"
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
export default PHBAddOns;
