import * as React from 'react'
import Header from './header'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <Header />
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout