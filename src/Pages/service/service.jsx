import React from 'react'
import Navbar from "../nav/Navbar";
import Header from "../nav/header";
import TopMost from "../nav/topMost";
import ServiceP from "../Service/components/serviceP"
import Footer from "../Footer/components/footerPage"

const Service = () => {
  return (
    <>
      <TopMost/>
      <Header />
      <Navbar/>
      <ServiceP/>
   <Footer/>
    </>
    
  )
}

export default Service