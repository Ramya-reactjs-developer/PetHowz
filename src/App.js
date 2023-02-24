import { ThemeProvider } from "@mui/material/styles";
import theme from "./Assets/Theme/Index";
// import { Grooming } from "./Pages/Grooming/Grooming";
// import { HomePage } from "./Pages/Home/Index";
// import Masters from './Pages/Masters/Index';
import { RouterNavigation } from "./Router/Index";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Masters/> */}
        {/* <Grooming/> */}
        {/* <HomePage /> */}
        <RouterNavigation />
        
      </ThemeProvider>
    </>
  );
}

export default App;
