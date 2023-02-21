import { ThemeProvider } from '@mui/material/styles';
import theme from './assets/theme';
import Masters from './Pages/Masters/index';
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
