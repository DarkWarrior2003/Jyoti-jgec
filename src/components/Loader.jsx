import React from 'react'
import logo from "./assests/Logo.png"
const Loader = () => {
  return (
    <div className="loader bg-[#0e0e3a]">
    <div className="ringloader"></div>
    <div className="ringloader"></div>
    <div className="ringloader"></div>
    <div className="ringloader "></div>
    <div className=' text-center' ><img src={logo} className=' w-24 animate-pulse ' alt="" /></div>
  </div>  
    
  )
}

export default Loader
