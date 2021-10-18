import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme'
import Layout from '../components/layout'

const IndexPage = () => 
     <ThemeProvider theme={theme}>
      <Layout pageTitle="Home"/>
      <p>An exploration of my interests and hobbies</p>
    </ThemeProvider>


export default IndexPage