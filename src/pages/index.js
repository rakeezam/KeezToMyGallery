import * as React from 'react'
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Layout from '../components/layout'

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
      <Layout/>
      <p>An exploration of my interests and hobbies</p>
    </ThemeProvider>


export default IndexPage