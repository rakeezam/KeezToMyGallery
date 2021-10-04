import * as React from 'react'
import { AppBar, Card, CardMedia, CardContent, Typography, Toolbar, IconButton, Button } from '@material-ui/core';
import Moonlight from '../images/moonlight.png'
// import MenuIcon from '@material-ui/icons/Menu';

const IndexPage = () => {
  return (
    <>
    <main>
      <title>Keez To My Gallery</title>
      <h1>Keez To My Gallery</h1>
      <p>An exploration of my interests and hobbies</p>
      <AppBar position="static"/> 
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      <AppBar /> 
    
  
    {/* <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        component="img"
        height="140"
        // image={Moonlight}
        alt="green iguana"
      />
      <CardContent>
       
          <p> Lizard </p>
     
         <p> Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica </p>
  
      </CardContent>
    </Card> */}
    </main>
    </>
  )
}

export default IndexPage