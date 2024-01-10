import React from 'react'
import navlogo from "../../assets/nav-logo.svg"
import navprofile from "../../assets/nav-profile.svg"
const Navbar = () => {
  return (
    <div className='flex justify-between items-center' style={{boxShadow:"0 1px 3px -2px #000"}}>
        <img className='h-[10vh] w-[50vw] sm:h-[10vh] sm:w-[30vw] sm:p-1' src={navlogo} alt="" />
        <img className='h-[7vh] w-[40vw] sm:h-[10vh] sm:w-[20vw] sm:p-1' src={navprofile} alt="" />
    </div>
  )
}

export default Navbar