import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { MOVIE_POSTER_LINK } from "../utils/const";

const CardItemModal = ({ item }) => {
  return (
    <Card>
      <CardHeader
        title={item.original_title}
        subheader={"Relise: " + item.release_date}
      />
      <CardMedia
        component="img"
        image={MOVIE_POSTER_LINK + item.poster_path}
        alt="Poster"
        height="750px"
        width="500px"
      />
      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary" te>
          <StarBorderIcon fontSize="inherit" />
          {item.vote_average} ({item.vote_count} votes)
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
          {item.overview ? item.overview : "No description"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Original title : " + item.original_title}
          Original language {item.original_language}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItemModal;
