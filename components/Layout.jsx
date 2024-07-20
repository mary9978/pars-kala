import React from 'react'
import Header from './header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
       <Header/>
       {children}
       <Footer/>
    </>
  )
}

export default Layout