import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import Moonlight from '../images/moonlight.png'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main
  },
  toolbar: {
      justifyContent: 'space-between'
  }
}));

const CardContainer = () => {
  const classes = useStyles();

  return (
    <>
       
    <Card sx={{ maxWidth: 345 }} className={classes.card} >
      <CardMedia
        component="img"
        height="140"
        image={Moonlight}
        alt="green iguana"
      />
      <CardContent>
       
          <p> Lizard </p>
     
         <p> Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica </p>
  
      </CardContent>
    </Card>

    </>
  )
}

export default CardContainer