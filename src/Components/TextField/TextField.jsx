import React, { useEffect, useState } from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import CustomTypography from "../Typography/Typography";
import "./TextField.css";

import { makeStyles } from "@mui/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  disabledStepButtons: {
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& .MuiTextField-root": {
      "& .Mui-disabled": {
        "& .MuiIconButton-root": {
          display: "none",
        },
      },
    },
  },
}));
/**
 * @param {object} props - required props in TextInput component
 * @returns {React.ReactElement} - returns the TextInput component
 */
function CustomTextField(props) {
  const {
    error,
    helperText,
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
    defaultValue,
    resetValue,
  } = props;

  const classes = useStyles();
  const [onChangeValue, setOnChangeValue] = React.useState(defaultValue);

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
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordInput = type === "password";
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid>
      <Grid className="textGrid">
        <CustomTypography
          text={label}
          customStyle={{ fontFamily: "Roboto-Regular" }}
          colorType={"text"}
        />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          placeholder={placeholder}
          onChange={handleChange}
          value={onChangeValue}
          type={showPassword && isPasswordInput ? "text" : type}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          multiline={multiline}
          className={customClass}
          rows={rows}
          defaultValue={defaultValue}
          error={error}
          helperText={helperText}
          FormHelperTextProps={{
            style: {
              color: "red",
              fontSize: "14px",
              paddingLeft: "45px",
              paddingTop: "10px",
            }, // Change the color to your desired color
            // Use the custom styled FormHelperText component
          }}
          InputProps={{
            endAdornment:
              type === "password" ? (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ) : (
                ""
              ),
            inputProps: { min: 0, step: 1 },
            // disableIncrement: true,
            // disableDecrement: true,
            // endAdornment: (
            //   <InputAdornment>
            //     <button className={classes.hiddenButton} />
            //     <button className={classes.hiddenButton} />
            //   </InputAdornment>
            // ),
          }}
          classes={{ root: classes.disabledStepButtons }}
          stepButtons={false}
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
  placeholder: PropTypes.string,
  customClass: PropTypes.string,
  defaultValue: PropTypes.string,
  resetValue: PropTypes.bool,
  requiredField: PropTypes.bool,
  validation_error_message: PropTypes.string,
  error: PropTypes.any,
  helperText: PropTypes.any,
};

CustomTextField.defaultProps = {
  label: "",
  multiline: false,
  rows: 4,
  disabled: false,
  type: "",
  iconSource: "",
  textInputIcon: false,
  placeholder: "",
  customClass: "",
  defaultValue: "",
  resetValue: false,
  requiredField: false,
  validation_error_message: "",
};
