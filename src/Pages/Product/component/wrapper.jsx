import React from 'react'
import Navbar from "../../nav/Navbar"
import Header from "../../nav/header";
import TopMost from "../../nav/topMost";
import AllProduct from './AllProducts/AllProduct';


const wrapper = () => {
  return (
    <>
      <TopMost/>
      <Header />
      <Navbar/>
      <AllProduct/>
      
   
    </>
    
  )
}

export default wrapper