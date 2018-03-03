import Header from './Header'
import React from 'react'

const Layout = (props) => (
  <div>
    <Header />
    {props.children}
  </div>
)

export default Layout
