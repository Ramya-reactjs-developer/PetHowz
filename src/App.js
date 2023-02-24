import { ThemeProvider } from "@mui/material/styles";
import theme from "./Assets/Theme/Index";
import { RouterNavigation } from "./Router/Index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterNavigation />
      </ThemeProvider>
    </>
  );
}

export default App;
