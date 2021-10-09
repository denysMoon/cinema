import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { MOVIE_POSTER_LINK } from '../utils/const'

const CardItem = ({ item }) =>{
    console.log(item)
    return(
        <Grid item>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader 
                    title={item.original_title} 
                    subheader={'Relise: ' + item.release_date} 
                />
                <CardMedia
                    component="img"
                    // height="194"
                    image={MOVIE_POSTER_LINK + item.poster_path}
                    alt="Poster"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {item.overview}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CardItem