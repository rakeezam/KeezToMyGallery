import * as React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Toolbar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main
  },
  toolbar: {
      justifyContent: 'space-between'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <title>Keez To My Gallery</title>
      {/* <h1>Keez To My Gallery</h1> */}
       <div className={classes.header}>
      {/* <AppBar position="static"/>  */}
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" component="h1">
            Keez To My Gallery 
          </Typography>
          <Button> <Link to="/about">About</Link></Button>
        </Toolbar>
      {/* <AppBar />  */}
      </div>
      <p>An exploration of my interests and hobbies</p>
    
    </>
  )
}

export default Header