import { CardActionArea, Checkbox, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { LabelContext } from "../../PetService/LableData";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CustomTypography from "../../../Components/Typography/Typography";
import customImages from "../../../Utils/Images";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../Redux/Actions/index";
import {
  SelectServiceEntries,
  DefaultSelectServiceValues,
} from "./SelectServiceEntries";
import "./SelectService.css";
import CheckboxLabels from "../../../Components/CheckBox/CheckBox";
import MultiCheckboxLabels from "../../../Components/CheckBox/MultiCheckBox";
import CustomButton from "../../../Components/Button/Button";
import CustomFileUploader from "../../../Components/FileUploader/FileUpload";

const SelectService = ({ option, disabled }) => {
  // const [checked, setChecked] = useState(false);
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState({
    nr1: false,
    nr2: false,
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    DefaultSelectServiceValues,
  });

  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log(state, "stateValue");
  const userGet = useSelector((state) => state?.phbbasicdetails);
  console.log(userGet, "inputNameddd");

  const toggleCheck = (inputName) => {
    console.log(inputName, "inputName");
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);
  const value = useContext(LabelContext);
  console.log(value, "useContext");
  const check = value.labelInfo?.check;
  console.log(check, "check");

  const user_id = localStorage.getItem("LoginChecker");
  console.log(user_id, "dsvsdvvsdvsd");
  const [data, setData] = useState();
  const navigate = useNavigate();
  console.log(data, "checkboxValue");
  const BesicDetails = state;
  console.log(BesicDetails, "BesicDetails");
  const onSubmit = (data1) => {
    setData(data1);
    console.log(data1, "checkdata");
    const formData = new FormData();
    formData.append(
      "service_master_id",
      JSON.stringify(data1.service_master_id)
    );
    formData.append("user_id", parseInt(user_id));
    formData.append("pet_service_name", state.a.pet_service_name);

    formData.append("name", state.a.name);
    formData.append("mobile_number", state.a.mobile_number);
    formData.append("street", state.a.street);
    formData.append("city", state.a.city);
    formData.append("locality", state.a.locality);
    formData.append("image", state.b);
    formData.append("state", state.a.state);
    formData.append("pin_code", state.a.pin_code);
    formData.append("pin_location", state.a.pin_location);

    const data = {
      data: formData,
      method: "post",
      apiName: "createPetServiceBasicDetails",
    };
    // props.func(formData)
    console.log(data, "checkDataValue");

    dispatch(actions.PHBBASICDETAILS(data));
  };
  React.useEffect(() => {
    console.log(userGet?.phbbasicdetails?.data?.message, "message");
    if (userGet?.phbbasicdetails?.data?.message === "SUCCESS") {
      navigate("/petHowz/AboutPet");
    }
  });

  console.log(state.a.pet_service_name, "dfbdbdfbdfbfd");
  const [image, setImage] = useState({ preview: "", raw: "" });
  const handleChange = (e) => {
    console.log(e, "createObjectURL");
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  return (
    <Grid container md={12} lg={12} xs={12} sm={12}>
      <Grid item md={6} lg={6} sm={12} xs={12}></Grid>
      <Grid item md={6} lg={6} sm={12} xs={12}>
        <Grid container md={12} lg={12} sm={12} xs={12}>
          {/* <CheckboxLabels
          labelText="checkBox"
          value={value}
          data={checkBoxData}
        /> */}
          {SelectServiceEntries?.map((keyValue) => (
            <Grid
              item
              md={keyValue.breakpoint}
              xs={12}
              sm={6}
              className="book_form_align"
            >
              <Controller
                control={control}
                rules={{
                  required: keyValue?.validation?.required,
                  pattern: keyValue?.pattern,
                  maxLength: keyValue?.validation?.maxLength,
                  // validate: (value) => handleValidate(value),
                }}
                render={({ field: { onChange, value } }) => (
                  <>
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
                          // resetValue={resetValue}
                        />
                      </Grid>
                    )}
                    {keyValue?.isCheckBoxEdit && (
                      <Grid
                        item
                        md={12}
                        lg={12}
                        my={2}
                        mx={5}
                        sm={12}
                        xs={12}
                        className="checkboxRow"
                      >
                        <CheckboxLabels
                          labelText={keyValue.label}
                          // labelText={`${keyValue.label} ${datas}`}
                          // customClass="icon_data"
                          onChange={onChange}
                          value={value}
                          data={keyValue.checkBoxData}
                          // disabled={keyValue.disabled}
                          requiredField={keyValue.requiredField}
                          id={keyValue.id}
                          labelPlacement={keyValue.labelPlacement}
                          // forWidth={keyValue.forWidth}
                        />
                        <Grid>
                          <CustomTypography
                            type="header"
                            customClass="check_text_edit"
                            text="I'm 18 and above"
                          />
                        </Grid>
                      </Grid>
                    )}
                  </>
                )}
                name={keyValue?.name}
              />
              {errors && errors[keyValue?.name]?.type === "required" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.error_message}`}
                    colorType="error"
                    type="error"
                  />
                </Grid>
              )}
              {errors && errors[keyValue?.name]?.type === "maxLength" && (
                <Grid>
                  <CustomTypography
                    text="Invalid Format"
                    colorType="error"
                    type="error"
                  />
                </Grid>
              )}
              {errors && errors[keyValue?.name]?.type === "pattern" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.validation_error_message}`}
                    colorType="error"
                    type="error"
                  />
                </Grid>
              )}
              {errors && errors[keyValue?.name]?.type === "focus" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.validation_error_message}`}
                    colorType="error"
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
        <Grid className="selectService" m={1}>
          {/* <CardActionArea className="selectServiceImg">
          <img src={customImages.Service} alt="" className="selectImg" />
          <input
            type="checkbox"
            name="nr1"
            onChange={() => toggleCheck("nr1")}
            checked={checked["nr1"]}
            className="checkPosition"
          />
        </CardActionArea>
        <Grid className="selectServiceText">
          <CustomTypography
            type="header"
            text="Pet Grooming"
            customClass="selectImgText"
          />
        </Grid> */}
        </Grid>
        <Grid className="selectService" m={1}>
          {/* <CardActionArea className="selectServiceImg">
          <img src={customImages.Service} alt="" className="selectImg" />
          <input
            type="checkbox"
            name="nr2"
            onChange={() => toggleCheck("nr2")}
            checked={checked["nr2"]}
            className="checkPosition"
          />
        </CardActionArea> */}
          {/* <Grid className="selectServiceText">
          <CustomTypography
            type="header"
            text="Pet Grooming"
            customClass="selectImgText"
          />
        </Grid> */}
        </Grid>
      </Grid>

      {/* <Grid className="selectService" m={1}>
        <CardActionArea onClick={OnHandleChange} className="selectServiceImg">
          <input
            type="checkbox"
            onChange={onClick}
            checked={checked}
            // tabIndex={-1}
            // disabled={disabled}
            className="checkInput"
          />
          <img src={customImages.Service} alt="" />
        </CardActionArea>
        <Grid className="selectServiceText">
          <CustomTypography
            type="header"
            text="Pet Grooming"
            customClass="selectImgText"
          />
        </Grid>
      </Grid>
      <Grid className="selectService" m={1}>
        <CardActionArea onClick={OnHandleChange} className="selectServiceImg">
          <input
            type="checkbox"
            onChange={onClick}
            checked={checked}
            // tabIndex={-1}
            // disabled={disabled}
            className="checkInput"
          />
          <img src={customImages.Service} alt="" />
        </CardActionArea>
        <Grid className="selectServiceText">
          <CustomTypography
            type="header"
            text="Pet Grooming"
            customClass="selectImgText"
          />
        </Grid>
      </Grid> */}
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
            style={{ margin: 25 }}
          >
            Next
          </Button>
        </ButtonGroup>
      </Grid> */}
    </Grid>
  );
};

export default SelectService;
