import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from './utils/muiTheme'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
    </ThemeProvider>
  );
}

export default App;
