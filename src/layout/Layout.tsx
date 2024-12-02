import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import Main from './main/Main'

interface Props {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
      <Header/>
      <Main children={children}/>
      <Footer/>
    </div>
  )
}

export default Layout
