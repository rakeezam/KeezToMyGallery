import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout pageTitle="About Me">
        <main>
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </main>
    </Layout>
    </ThemeProvider>
  )
}

export default AboutPage