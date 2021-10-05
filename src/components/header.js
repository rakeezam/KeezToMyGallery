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
       <div className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" component="h1">
            Keez To My Gallery 
          </Typography>
          <Button> <Link to="/about">About</Link></Button>
        </Toolbar>
      </div>
    </>
  )
}

export default Header