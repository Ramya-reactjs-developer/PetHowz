import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import CustomTypography from "../Typography/Typography";
import "./timePicker.css";

const CustomTimePicker = (props) => {
  const [value, setValue] = React.useState(null);
  const {
    labelText,
    onHandleChange,
    timeStyle,
    minTime,
    maxTime,
    disabled,
    placeholder,
    requiredField,
  } = props;
  return (
    <Grid className="textGrid">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CustomTypography
          text={labelText}
          colorType="primary"
          requiredField={requiredField && "required"}
          customClass="time_text_edit"
        />
        <TimePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            onHandleChange(newValue);
          }}
          maxTime={maxTime}
          minTime={minTime}
          renderInput={(params) => (
            <TextField
              {...params}
              color="secondary"
              autoComplete="off"
              sx={{ width: "100%" }}
              className={timeStyle}
              placeholder={placeholder}
            />
          )}
          disabled={disabled}
        />
      </LocalizationProvider>
    </Grid>
  );
};
export default CustomTimePicker;

CustomTimePicker.propTypes = {
  label: PropTypes.string,
  onHandleChange: PropTypes.func.isRequired,
  timeStyle: PropTypes.string,
  disabled: PropTypes.bool,
};
CustomTimePicker.defaultProps = {
  label: "",
  timeStyle: "",
  disabled: false,
};
