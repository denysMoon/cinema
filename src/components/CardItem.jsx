import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { MOVIE_POSTER_LINK } from "../utils/const";

const CardItem = ({ item }) => {
  console.log(item);
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={item.original_title}
          subheader={"Relise: " + item.release_date}
        />
        <CardMedia
          component="img"
          image={MOVIE_POSTER_LINK + item.poster_path}
          alt="Poster"
        />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.vote_average} ({item.vote_count} votes)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.overview}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;
