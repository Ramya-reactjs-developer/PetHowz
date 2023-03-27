import React, { useEffect } from "react";
import { Grid, TextField, InputAdornment } from "@mui/material";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";
import "./TextField.css";
/**
 *
 * @param {object} props - required props in TextInput component
 * @returns {React.ReactElement} - returns the TextInput component
 */
function CustomTextField(props) {
  const {
    label,
    onHandleChange,
    value,
    multiline,
    rows,
    disabled,
    customClass,
    iconSource,
    type,
    placeholder,
    textInputIcon,
    // isLogin,
    // uniqueText,
    defaultValue,
    resetValue,
  } = props;
  const [onChangeValue, setOnChangeValue] = React.useState(defaultValue);
  console.log("default", resetValue, value);

  useEffect(() => {
    setOnChangeValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    setOnChangeValue("");
  }, [resetValue]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onHandleChange(inputValue);
    setOnChangeValue(inputValue);
  };
  return (
    <Grid>
      <Grid className="textGrid">
        <CustomTypography text={label} customClass="textLabel" />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder={placeholder}
          onChange={handleChange}
          value={onChangeValue}
          type={type}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          multiline={multiline}
          // className={customClass}

          // className={`${isLogin && 'loginBox'} ${customClass} textBox`}
          // id={uniqueText && 'uppercase'}
          // className="textBox"
          // disabled
          // disabled={true}
          className={customClass}
          rows={rows}
          defaultValue={defaultValue}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                {/* {textInputIcon && <img src={iconSource} alt="password" />} */}
              </InputAdornment>
            ),
            disabled: true,
          }}
        />
      </Grid>
    </Grid>
  );
}
export default CustomTextField;

CustomTextField.propTypes = {
  label: PropTypes.string,
  onHandleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  multiline: PropTypes.bool,
  type: PropTypes.string,
  rows: PropTypes.number,
  disabled: PropTypes.bool,
  iconSource: PropTypes.string,
  textInputIcon: PropTypes.bool,
  // isLogin: PropTypes.bool,
  placeholder: PropTypes.string,
  // uniqueText: PropTypes.bool,
  customClass: PropTypes.string,
  defaultValue: PropTypes.string,
  resetValue: PropTypes.bool,
};
CustomTextField.defaultProps = {
  label: "",
  multiline: false,
  rows: 4,
  disabled: false,
  type: "",
  iconSource: "",
  textInputIcon: false,
  // isLogin: false,
  placeholder: "",
  // uniqueText: false,
  customClass: "",
  defaultValue: "",
  resetValue: false,
};
