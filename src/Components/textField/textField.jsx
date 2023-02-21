import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

function CustomTextField(props) {
  const {
    label,
    name,
    value,
    onChange,
    error,
    helperText,
    fullWidth,
    placeholder,
  } = props;

  return (
    <>
      {label}
      <TextField
        //   label={label}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        fullWidth={fullWidth}
        variant="outlined"
      />
    </>
  );
}

CustomTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
};

CustomTextField.defaultProps = {
  error: false,
  helperText: "",
  fullWidth: false,
};

export default CustomTextField;
