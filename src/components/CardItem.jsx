import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import CardItemModal from "./CardItemModal";

import { MOVIE_POSTER_LINK } from "../utils/const";

//Style for modal
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
};

const CardItem = ({ item }) => {
  //State for modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          height="750px"
          width="500px"
        />
        <CardContent>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" te>
            <StarBorderIcon fontSize="inherit" />
            {item.vote_average} ({item.vote_count} votes)
          </Typography>
          <Box
            component="div"
            sx={{
              textOverflow: "ellipsis",
              my: 2,
              overflow: "hidden",
              height: 100,
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {item.overview ? item.overview : "No description"}{" "}
            </Typography>
          </Box>
        </CardContent>
        <Button onClick={handleOpen}>More info</Button>
      </Card>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardItemModal item={item} />
        </Box>
      </Modal>
    </Grid>
  );
};

export default CardItem;
