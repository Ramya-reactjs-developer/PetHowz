import { ThemeProvider } from "@mui/material/styles";
import theme from "./Assets/Theme/Index";
import { Grooming } from "./Pages/Grooming/Grooming";
// import { HomePage } from "./Pages/Home/Index";
// import Masters from './Pages/Masters/Index';
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Masters/> */}
        <Grooming/>
        {/* <HomePage /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
