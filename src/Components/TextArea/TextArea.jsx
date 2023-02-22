import React from 'react';
import { TextField } from '@mui/material';

export default function CustomTextArea(props) {
    const { label, placeholder, value, onClickHandle,rows } =
    props;
  return (
    <TextField
      id="textarea"
      label={label}
      placeholder={placeholder}
      multiline
      rows={rows}
      value={value}
      onChange={onClickHandle}
      fullWidth
    />
  );
}

