/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import './Select.css';
/**
 *
 * @param {*} props required props
 * @returns {React.ReactElement} returns the dropdown component
 */
function CustomSelect(props) {
  const { value, dropdown, style, onChangeData, disabled, error, errmsg, placeholder, className } = props;
  return (
    <div className="dropdown">
      <div>
        <select
          disabled={disabled && disabled}
          style={style}
          onChange={(e) => onChangeData && onChangeData(e.target.value)}
          className={`dropdownStyling ${className}`}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {dropdown.map((data) => (
            <option value={data.id} selected={value === data.id} className="option">
              {data.value}
            </option>
          ))}
        </select>
      </div>
      <div className="Errormsg">
        <div>{error && errmsg}</div>
      </div>
    </div>
  );
}
export default CustomSelect;
CustomSelect.propTypes = {
  value: PropTypes.string.isRequired,
  dropdown: PropTypes.arrayOf(PropTypes.any).isRequired,
  style: PropTypes.objectOf,
  onChangeData: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errmsg: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
CustomSelect.defaultProps = {
  style: {},
  onChangeData: null,
  disabled: false,
  error: false,
  errmsg: '',
  placeholder: '',
  className: '',
};
