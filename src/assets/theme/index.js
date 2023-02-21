import { createTheme } from "@mui/material/styles";
import colors from "../../utils/colors";
const theme = createTheme({
  palette: {
    primary: {
      main: colors.orange.primary,
    },
    secondary: {
      main: colors.blue.primary,
    },
    tertiary: {
      main: colors.gray.secondary,
    },
    error: {
      main: colors.pink.secondary,
    },
    success: {
      main: colors.green.quaternary,
    },
    warning: {
      main: colors.error.secondary,
    },
  },
});
export default theme;
