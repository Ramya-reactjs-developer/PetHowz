/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/require-default-props */
import React from "react";
import propTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import { Grid } from "@mui/material";
import "./CustomForm.css";
import CustomTypography from "../Typography/Typography";
import customIcons from "../../Utils/Icons/Index";
import CustomButton from "../Button/Button";
import TextField from "../TextField/TextField";
import CustomFileUploader from "../FileUploader/FileUpload";
import "./CustomForm.css";
import CustomDatePicker from "../DatePicker/DatePicker";
import CustomRadioButton from "../RadioButton/RadioButton";
import CustomCheckbox from "../CheckBox/CheckBox";
import CustomSelect from "../Select/Select";
import CustomImageUploader from "../FileUploader/FileUpload";
import MultipleSelectChip from "../MultipleDropdown/MultipleDropdown";
import ProfileImageUploader from "../ProfileImageUploader/ProfileImageUploader";
import CustomProfileUploader from "../ProfileUploader/ProfileUpload";
import CustomTimePicker from "../TimePicker/TimePicker";
import CustomSingleUploader from "../FileUploader/SingleUploader";

/**
 * @param {*} props defines the prop
 * @name CustomForm
 * @returns {React.ReactElement} return the CustomForm component
 */
function CustomForm(props) {
  // const defaultValues = {};
  const {
    AllEntries,
    onReceiveData,
    onChangeRadioAction,
    textFieldChange,
    handleSelect,
    customFormData,
    defaultValues,
    onClickHandle,
    gridAlign,
    editTrue,
    onAddClickHandle,
    // dropdownData,
  } = props;
  const [values, setValues] = React.useState([]);
  console.log(values, "arhulvalues");
  const [upload, setUpload] = React.useState(null);
  const [resetValue, setResetValue] = React.useState([]);
  console.log("reset", defaultValues);

  const [colorValue, setColorValue] = React.useState("");
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
    console.log(data, "lllldata");
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
                {keyValue?.isBirthdayPicker && (
                  <Grid
                    item
                    md={12}
                    my={2}
                    mx={2}
                    sm={12}
                    xs={12}
                    className="dateEditChange"
                  >
                    <CustomDatePicker
                      labelText={keyValue.label}
                      onHandleChange={onChange}
                      value={keyValue.value}
                      dateStyle="dateIconEdit"
                      date={value}
                      requiredField={keyValue.requiredField}
                      placeholder={keyValue.placeholder}
                      defaultValue={keyValue.defaultValue}
                      resetValue={resetValue}
                      maxDate={keyValue.maxDate}
                    />
                  </Grid>
                )}
                {keyValue?.isDateTimePicker && (
                  <Grid
                    item
                    md={12}
                    lg={12}
                    my={2}
                    mx={5}
                    sm={12}
                    xs={12}
                    className="timeEditChange"
                  >
                    <CustomTimePicker
                      labelText={keyValue.label}
                      onHandleChange={onChange}
                      value={keyValue.value}
                      timeStyle={keyValue.timeStyle}
                      time={value}
                      requiredField={keyValue.requiredField}
                      customClass="timeIconThis"
                      // maxTime="03/02/2023"
                      // minTime="03/11/2022"
                    />
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
                      pattern={keyValue.pattern}
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
                    <CustomCheckbox
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
                {keyValue?.isDropdown && (
                  <Grid item md={12} my={2} mx={2} sm={12} xs={12}>
                    <CustomSelect
                      label={keyValue?.label}
                      labelText={keyValue.labelText}
                      handleChange={(e) => {
                        onChange(e);
                        handleSelect(e, keyValue.name);
                      }}
                      value={value}
                      // data={dropdownData}
                      data={keyValue.DropdownData}
                      requiredField={keyValue.requiredField}
                      // placeholder={keyValue.placeholder}
                    />
                  </Grid>
                )}

                {/* {keyValue?.isFileUploader && (
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
                      upLoad={customIcons.LogoUploader}
                      label={keyValue.label}
                      customClass={keyValue.customClass}
                      getImage={(val) => {
                        onChange(val);
                        getImage(val);
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
                    my={2}
                    mx={2}
                    xs={12}
                    className="circleLogoBox"
                  >
                    <CustomImageUploader
                      upLoad={customIcons.LogoUploader}
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
                      upLoad={customIcons.LogoUploader}
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
                {keyValue?.isSingleUploader && (
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
                      // handleChange={handleChange}
                      label={keyValue.label}
                      // handleChange={(e) => {
                      //   onChange(e);
                      //   // handleChange(e);
                      //   // handleUpload(e);
                      // }}
                      // Image={image}
                      value={value}
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
                {keyValue?.isAddButton && (
                  <Grid item md={12} sm={12} xs={12} mx={2}>
                    <CustomButton
                      btnTitle={keyValue.buttonTitle}
                      variant="contained"
                      color="primary"
                      customClass={keyValue.customClass}
                      btnStyles={{
                        color: "#fff",
                        // background: "#F8BD22",
                        marginTop: "45px",
                      }}
                      onClickHandle={onAddClickHandle}
                    />
                  </Grid>
                )}
                {/* <CustomButton
            btnTitle="+"
            color="primary"
            onClickHandle={onAddAnother}
            btnStyles={Addbtn}
          /> */}
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
  );
}
export default CustomForm;

CustomForm.propTypes = {
  AllEntries: propTypes.arrayOf(propTypes.objectOf).isRequired,
  defaultValues: propTypes.objectOf().isRequired,
  // defaultImage: propTypes.objectOf().isRequired,
  onReceiveData: propTypes.func,
  // handleCancel: propTypes.func,
  onChangeRadioAction: propTypes.func,
  textFieldChange: propTypes.func,
  handleSelect: propTypes.func,
  customFormData: propTypes.func,
  editTrue: propTypes.string,
  onClickHandle: propTypes.func,
  onAddClickHandle: propTypes.func,
};
CustomForm.defaultProps = {
  // handleCancel: () => null,
  onReceiveData: () => null,
  textFieldChange: () => null,
  handleSelect: () => null,
  onChangeRadioAction: () => null,
  customFormData: () => null,
  editTrue: "",
  onClickHandle: "",
  onAddClickHandle: "",
};
