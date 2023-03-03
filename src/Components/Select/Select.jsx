import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, MenuItem, Box, InputLabel } from '@mui/material';
import './Select.css';
import CustomTypography from '../Typography/Typography';
/**
 *
 * @param {object} props - props required in normal dropdown
 * @returns {React.ReactElement} - returns the normal dropdown
 */
function CustomSelect(props) {
  const {
    data,
    handleChange,
    // dropDownChange,
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
  console.log(selectedValue, 'handleChange');
  return (
    <Box className="box" item md={12} sm={12}>
      <Box>
        <CustomTypography
          type="caption"
          text={labelText}
          placeholder={placeholder}
          customClass="textDropdown"
          // colorType="senary"
          requiredField={requiredField}
        />
      </Box>
      <FormControl className="formControl" fullWidth disabled={disabled} size="small">
        <InputLabel id="demo-simple-select-label" color="primary" className="input">
          {placeholder}
        </InputLabel>

        <Select
          size="small"
          name={name}
          fullWidth
          // labelId="demo-simple-select-label"
          // id="demo-simple-select"
          labelId="demo-select-small"
          id="demo-select-small"
          value={value}
          label={label}
          selectedValue={selectedValue}
          data={data}
          className={`${customClass} ${disabled && 'disable'} customDropdown`}
          onChange={(e) => handleChange(e)}
          // dropDownChange={(e) => dropDownChange(e)}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {data?.length &&
            data?.map((item) => (
              <MenuItem value={item?.value} key={item?.id}>
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
  // dropDownChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  selectedValue: PropTypes.bool,
  customClass: PropTypes.string,
  requiredField: PropTypes.bool,
  placeholder: PropTypes.string,
  labelText: PropTypes.string,
};
CustomSelect.defaultProps = {
  disabled: false,
  label: '',
  customClass: '',
  selectedValue: '',
  requiredField: false,
  placeholder: '',
  labelText: '',
};
