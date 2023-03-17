import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const CardUser = ({img, name, description}) => {
  return (
    <Card sx={{ maxWidth: 400 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="330"
          image= {img} sx={{width: 400}}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={"#DE84FA"}>
            {name}
          </Typography>
          <Typography variant="body2" color="black">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" >
        Leer Mas
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardUser