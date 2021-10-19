import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import Moonlight from '../images/moonlight.png'

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: '30%'
  },
}));

const CardContainer = () => {
  const classes = useStyles();

  return (
    <>
       
    <Card className={classes.card} >
      <CardMedia
        component="img"
        height="300"
        image={Moonlight}
        alt="Church at night with moon shining"
      />
      <CardContent>     
          <p> Edinburgh </p>
      </CardContent>
    </Card>

    </>
  )
}

export default CardContainer