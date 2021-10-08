import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({

});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        The App
    </ThemeProvider>
  );
}

export default App;
