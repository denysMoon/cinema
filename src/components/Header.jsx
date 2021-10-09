import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchForm from './SearchForm'

const Header = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <SearchForm />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header