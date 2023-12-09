import React from 'react'
import logo from "./assests/Logo.png"
const Loader = () => {
  return (
    <div className='flex justify-center items-center bg-blue-900 h-[86vh] lg:h-[100vh]'>
        <div className='loading'><img src={logo} className='w-[80px] h-[80px]' alt="" /></div>
    </div>
    
  )
}

export default Loader
