import React from "react";
import { makeStyles } from "@mui/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function CustomSelect({ label, options, value, onChange }) {
  const classes = useStyles();

  return (
    <FormControl
      className={classes.formControl}
      variant="filled"
      sx={{ m: 1, minWidth: 120 }}
    >
      <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={value}
        onChange={onChange}
      >
        {options.map((option,index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomSelect;
