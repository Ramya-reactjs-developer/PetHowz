import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
const CssTextField = styled(TextField)({
  // '& label.Mui-focused': {
  //   color: 'primary',
  // },
  // '& .MuiInput-underline:after': {
  //   borderBottomColor: 'pink',
  // },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'primary',
    },
    '&:hover fieldset': {
      borderColor: '#4A023980',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'primary',
    },
  },
});
export default function CustomDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date Of Birth"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <CssTextField label="Custom CSS" id="custom-css-outlined-input" {...params}  />}
        inputFormat="DD/MM/YYYY"
      />
    </LocalizationProvider>
  );
}

