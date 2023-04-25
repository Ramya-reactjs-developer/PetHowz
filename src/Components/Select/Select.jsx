import React from "react";
import PropTypes from "prop-types";
import { FormControl, Select, MenuItem, Box, InputLabel } from "@mui/material";

import CustomTypography from "../Typography/Typography";
/**
 *
 * @param {object} props - props required in normal dropdown
 * @returns {React.ReactElement} - returns the normal dropdown
 */
function CustomSelect(props) {
  const {
    customStyle,
    customStyle2,
    customStyle3,
    data,
    handleChange,
    labelText,
    value,
    disabled,
    name,
    label,
    customClass,
    selectedValue,
    placeholder,
    requiredField,
  } = props;
  console.log(handleChange, "handleChange");
  return (
    <Box className="box" item md={12} sm={12}>
      <Box>
        <CustomTypography
          type="caption"
          text={labelText}
          placeholder={placeholder}
          // customClass="textDropdown"
          colorType="text"
          customStyle={{ fontFamily: "Roboto-Regular" }}
          requiredField={requiredField}
        />
      </Box>
      <FormControl
        className="formControl"
        fullWidth
        disabled={disabled}
        sx={customStyle}
        // size="large"
      >
        <InputLabel
          id="demo-simple-select-label"
          color="primary"
          className="input"
          sx={customStyle2}
        >
          {placeholder}
        </InputLabel>

        <Select
          // size="large"
          // autoWidth={true}
          sx={customStyle3}
          name={name}
          fullWidth
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          labelId="demo-select-small"
          id="demo-select-small"
          value={value || ""}
          label={label}
          selectedValue={selectedValue}
          data={data}
          className={`${customClass} ${disabled && "disable"} customDropdown`}
          onChange={(e) => handleChange(e)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {data?.length &&
            data?.map((item) => (
              <MenuItem value={item?.value} name={item?.id}>
                {item?.value}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
export default CustomSelect;

CustomSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  selectedValue: PropTypes.bool,
  customClass: PropTypes.string,
  requiredField: PropTypes.bool,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
  customStyle: PropTypes.any,
  customStyle2: PropTypes.any,
  customStyle3: PropTypes.any,
};
CustomSelect.defaultProps = {
  disabled: false,
  label: "",
  customClass: "",
  selectedValue: "",
  requiredField: false,
  placeholder: "",
  labelText: "",
};
