import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import AlertPage from "./AlertPage";

const Display = () => {
  const search = useSelector((store) => store.search.search);

  console.log(search);

  const show = () => {
    if (search.results) {
      return search.results.map((item) => <CardItem item={item} />);
    } else {
      return <AlertPage info="Search something" />;
    }
  };

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        {show()}
      </Grid>
    </Container>
  );
};

export default Display;
