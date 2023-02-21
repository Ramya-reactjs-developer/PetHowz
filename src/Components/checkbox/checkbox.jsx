import React from 'react';
import { makeStyles } from '@mui/styles';
import {FormControlLabel,Checkbox} from '@mui/material';


const useStyles = makeStyles({
  root: {
    '& .MuiCheckbox-root': {
      color: 'primary'
    }
  }
});

const CustomCheckbox = ({ name, label, checked, onChange }) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      control={
        <Checkbox
          name={name}
          checked={checked}
          onChange={onChange}
          color="primary"
        />
      }
      label={label}
      classes={{ root: classes.root }}
    />
  );
};

export default CustomCheckbox;
