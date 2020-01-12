import React from "react"
import "./layout.css"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to="/"> Video Chat App</Link>
      </header>
      <main>{children}</main>
    </>
  )
}

export default Layout
