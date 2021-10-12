import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ height: 70, background: "none" }}>
        <Toolbar>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <SearchForm />
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: "black" }}>
                Get info about any movie
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
