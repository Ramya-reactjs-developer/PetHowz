import { ThemeProvider } from "@mui/material/styles";
import theme from "./Assets/Theme/Index";
import { Provider } from "react-redux";
import store from "./Redux/Reducers";
import RouterNavigation from "./Router/Index";
// import Login from "./Pages/Login/Login";
import "./App.css";
// import { Grooming } from "./Pages/Grooming/Grooming";
// import { HomePage } from "./Pages/Home/Index";
// import Masters from './Pages/Masters/Index';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterNavigation />
        {/* <Login/> */}
      </ThemeProvider>
    </Provider>
  );
}

export default App;
