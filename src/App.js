import { ThemeProvider } from "@mui/material/styles";
import theme from "./Assets/Theme/Index";
import { Provider } from "react-redux";
import store from './Reducers';
import { RouterNavigation } from "./Router/Index";
// import { Grooming } from "./Pages/Grooming/Grooming";
// import { HomePage } from "./Pages/Home/Index";
// import Masters from './Pages/Masters/Index';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <Masters/> */}
        {/* <Grooming/> */}
        {/* <HomePage /> */}
        <RouterNavigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
