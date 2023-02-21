import React from "react";
import ReactDOM from "react-dom/client";


import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme';
import Masters from './pages/Masters/index';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
   <ThemeProvider theme={theme}>
    <Masters/>
    </ThemeProvider>
  </>
);
