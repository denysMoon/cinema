import './App.css';
import CssBaseline from '@mui/material/CssBaseline';

import Header from './components/Header';

import { ThemeProvider } from '@mui/material/styles';

import { theme } from './utils/muiTheme'
import MainContent from './components/MainContent';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        
        <MainContent />

    </ThemeProvider>
  );
}

export default App;
