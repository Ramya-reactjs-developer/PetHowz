import { ThemeProvider } from '@mui/material/styles';
import theme from './Assets/Theme/Index';
import Masters from './Pages/Masters/Index';
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Masters/>
    </ThemeProvider>
   
    </>
  );
}

export default App;
