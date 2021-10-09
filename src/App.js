import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from './utils/muiTheme'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        The App
    </ThemeProvider>
  );
}

export default App;
