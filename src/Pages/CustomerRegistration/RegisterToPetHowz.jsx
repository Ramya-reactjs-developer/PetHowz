import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import CustomTypography from "../../Components/Typography/Typography";
import "./CustomerRegistration.css";

import {
  DefaultRegisterEntriesValues,
  RegisterEntries,
} from "./RegisterEntries";
import CustomIcons from "../../Utils/Icons/Index";
import { Controller, useForm } from "react-hook-form";
import CustomRadioButton from "../../Components/RadioButton/RadioButton";
import CustomDatePicker from "../../Components/DatePicker/DatePicker";
import CustomSelect from "../../Components/Select/Select";
import CustomImageUploader from "../../Components/FileUploader/FileUpload";
import ProfileImageUploader from "../../Components/ProfileImageUploader/ProfileImageUploader";
import CustomButton from "../../Components/Button/Button";
import MultipleSelectChip from "../../Components/MultipleDropdown/MultipleDropdown";

export const RegisterToPethowz = (props) => {
  //custom form
  const {
    AllEntries = RegisterEntries,

    onChangeRadioAction,
    textFieldChange,
    customFormData,
    defaultValues,
    gridAlign,
    editTrue,
  } = props;
  const [values, setValues] = React.useState([]);
  console.log(values, "arhulvalues");
  const [upload, setUpload] = React.useState(null);
  const [resetValue, setResetValue] = React.useState([]);
  console.log("reset", defaultValues);

  const [colorValue, setColorValue] = React.useState("");

  const [sssvalue, setValue] = React.useState();
  const onReceiveData = (data) => {
    setValue(data);
  };
  console.log(sssvalue, "sssdata");
  React.useEffect(() => {}, [sssvalue]);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      audioCall: [
        {
          timing: 15,
          status: true,
        },
        {
          timing: 30,
          status: true,
        },
        {
          timing: 45,
          status: true,
        },
        {
          timing: 60,
          status: true,
        },
      ],
      video: [
        {
          timing: 15,
          status: true,
        },
        {
          timing: 30,
          status: true,
        },
        {
          timing: 45,
          status: true,
        },
        {
          timing: 60,
          status: true,
        },
      ],
      chat: [
        {
          timing: 15,
          status: true,
        },
        {
          timing: 30,
          status: true,
        },
        {
          timing: 45,
          status: true,
        },
        {
          timing: 60,
          status: true,
        },
      ],
      report: [
        {
          timing: 15,
          status: true,
        },
        {
          timing: 30,
          status: true,
        },
        {
          timing: 45,
          status: true,
        },
        {
          timing: 60,
          status: true,
        },
      ],
    },
  });

  /**
   *
   * @param {*} data
   */

  // useEffect(() => {
  //   reset(defaultValues);
  // }, [defaultValues, reset]);

  const getImage = (val) => {
    setUpload(val);
    console.log(val, "val");
  };

  const handleDelete = (e, value) => {
    e.preventDefault();
    setValues(values.filter((name) => name !== value));
  };
  /**
   *
   * @param {*} data
   */
  const onSelectValue = (data) => {
    setValues(data);
  };

  /**
   *
   * @param {*} data
   */
  const onSubmit = (data) => {
    console.log(data, "fadsfadsf");
    const customData = data;
    console.log(customData, "customData");
    const rateCards = [
      { type: 1, data: customData.audioCall },
      { type: 2, data: customData.video },
      { type: 3, data: customData.chat },
      { type: 4, data: customData.report },
    ];
    delete customData.audioCall;
    delete customData.video;
    delete customData.chat;
    delete customData.report;
    customData.RateCard = rateCards;
    console.log(customData, "asdasdasd");
    const AllData = Object.assign(customData, { color_text: colorValue });
    onReceiveData(AllData);
    customFormData(customData);
    reset(defaultValues);
    setResetValue(!resetValue);
    console.log("customImage", defaultValues);
  };
  const handleCancel = () => {
    reset(defaultValues);
  };
  return (
    <Grid container item xs={12}>
      <Grid item textAlign={"center"} sm={6} xs={12}>
        <img src={CustomIcons.Logo} alt="logo" />
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
        <Grid container item md={12} sm={12} xs={12}>
          {AllEntries?.map((keyValue) => (
            <Grid
              item
              md={keyValue.breakpoint}
              sm={12}
              xs={12}
              className={gridAlign}
            >
              <Controller
                control={control}
                rules={{
                  required: keyValue?.validation?.required,
                  pattern: keyValue?.pattern,
                  maxLength: keyValue?.validation?.maxLength,
                }}
                render={({ field: { onChange, value } }) => (
                  <>
                    {keyValue?.isRadioAction && (
                      <Grid item md={12} sm={12} xs={12} my={2} mx={2}>
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
                            onChangeRadioAction(e, keyValue.name);
                          }}
                          value={value}
                          data={keyValue.radioButtonData}
                          requiredField={keyValue.requiredField}
                          defaultValue
                          customClass={keyValue.customClass}
                        />

                        {/* {keyValue?.isRadioAction2 && (
                      <Grid item md={12} sm={12} xs={12} my={2} mx={2}>
                        <CustomTypography
                          type="header"
                          text={keyValue.text}
                          customClass={keyValue.customClass}
                          colorType={keyValue.colorType}
                        />
                        <CustomRadioButton
                          labelText={keyValue.label2}
                          onChange={(e) => {
                            onChange(e);
                            onChangeRadioAction(e, keyValue.name2);
                          }}
                          value={value}
                          data={keyValue.radioButtonData2}
                          requiredField={keyValue.requiredField}
                          defaultValue
                          customClass={keyValue.customClass2}
                        />
                      </Grid>
                    )} */}
                      </Grid>
                    )}

                    {keyValue?.isTextInput && (
                      <Grid item md={12} sm={12} my={2} mx={2} xs={12}>
                        {console.log(value, "value")}

                        <TextField
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
                        my={2}
                        mx={2}
                        xs={12}
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
                            getImage(val);
                            props.textFieldChange(val, keyValue.name);
                          }}
                          regForm={keyValue.regForm}
                          defaultImage={keyValue.defaultImage}
                          resetValue={resetValue}
                        />
                      </Grid>
                    )}

                    {keyValue?.isProfileUploader && (
                      <Grid item md={12} sm={12} my={2} mx={2} xs={12}>
                        <ProfileImageUploader />
                      </Grid>
                    )}
                    {keyValue?.isSubmitButton && (
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        mx={2}
                        className="SubmitButtonColor"
                      >
                        <CustomButton
                          btnTitle={keyValue.buttonTitle}
                          variant="contained"
                          color="primary"
                          customClass={keyValue.customClass}
                          btnStyles={{
                            color: "#fff",
                            // background: "#F8BD22",
                            marginTop: "50px",
                          }}
                          onClickHandle={handleSubmit(onSubmit)}
                        />
                      </Grid>
                    )}
                    {keyValue.isCancelButton && (
                      <Grid
                        item
                        md={12}
                        sm={12}
                        xs={12}
                        mx={2}
                        className="CancelButtonColor"
                      >
                        <CustomButton
                          btnTitle={keyValue.buttonTitle}
                          customClass={keyValue.customClass}
                          variant="outlined"
                          color="primary"
                          btnStyles={{
                            color: "#7b7b7be6",
                            marginTop: "50px",
                            border: "1px solid #E2E2E2",
                          }}
                          onClickHandle={() => handleCancel()}
                        />
                      </Grid>
                    )}

                    {keyValue?.isCustomTypography && (
                      <Grid item md={12} sm={12} xs={12}>
                        <CustomTypography
                          type="header"
                          text={keyValue.text}
                          customClass={keyValue.customClass}
                          colorType={keyValue.colorType}
                        />
                        <CustomTypography
                          type="title"
                          colorType={keyValue.colorType1}
                          text={keyValue.text2}
                          customClass={keyValue.customClass1}
                        />
                      </Grid>
                    )}
                    {keyValue?.isEmptySpace && (
                      <Grid item md={12} customClass={keyValue.customClass} />
                    )}
                  </>
                )}
                name={keyValue?.name}
              />
              {errors && errors[keyValue?.name]?.type === "required" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.error_message} is required`}
                    colorType="error"
                    customClass="errorText"
                  />
                </Grid>
              )}

              {errors && errors[keyValue?.name]?.type === "maxLength" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.label} is not valid`}
                    colorType="error"
                    customClass="errorText"
                  />
                </Grid>
              )}
              {errors && errors[keyValue?.name]?.type === "pattern" && (
                <Grid>
                  <CustomTypography
                    text={`${keyValue?.label} invalid format`}
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
                    customClass="errorText"
                  />
                </Grid>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item textAlign={"center"} className="Box-Image" sm={6} xs={12}>
        <div className="Box-color"></div>
      </Grid>
    </Grid>
  );
};
