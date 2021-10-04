import * as React from 'react'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Header from '../components/header'
import CardContainer from '../components/card-container'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F7E1D7'
    },
    background: {
      default: '#FFFFFF'
    }
  },
});


const IndexPage = () => 
     <ThemeProvider theme={theme}>
      <Header />
      {/* <CardContainer /> */}
    </ThemeProvider>


export default IndexPage