import { ThemeProvider } from "@mui/material/styles";
import theme from "./Assets/Theme/Index";
import { HomePage } from "./Pages/Home/Index";
// import Masters from './Pages/Masters/Index';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Masters/> */}
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
