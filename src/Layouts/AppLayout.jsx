import React from 'react'
import Header from "../Components/Header"
import PropTypes from "prop-types"
import Footer from "../Components/Footer"

export default function AppLayout({children}) {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

AppLayout.PropTypes = {
    children: PropTypes.node.isRequired
}