import React from 'react'
import { Link } from 'react-router-dom'
import addproducticon from "../../assets/Product_Cart.svg"
import listproducticon from "../../assets/Product_list_icon.svg"
const Sidebar = () => {
  return (
    <div className='flex flex-row pt-5 w-[100vw] justify-center lg:justify-normal h-[15vh] lg:h-[100vh] lg:pt-10  max-h-[100vh] gap-10 bg-slate-100 items-center lg:flex-col  lg:w-[22vw] '>
        <Link to="/addproduct" className=' h-12 w-[40vw] sm:w-[30vw] lg:w-[20vw]  rounded-s-lg cursor-pointer mb-1'>
            <div className='flex flex-row bg-white justify-center items-center h-12 md:h-14 rounded-md'>
                <img src={addproducticon} className='h-5 w-5 ' alt="" />
                <p className='ml-2 text-xs sm:text-lg md:text-[20px]'>Add Product</p>
            </div>
        </Link>
        <Link to="/listproduct" className=' h-12 w-[40vw] sm:w-[30vw] md:h-14 lg:w-[20vw]  cursor-pointer'>
            <div className='flex flex-row bg-white justify-center items-center h-12 md:h-14 rounded-md'>
                <img className='h-5 w-5 ' src={listproducticon} alt="" />
                <p className='ml-2 text-xs sm:text-lg md:text-[20px]'>List Product</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar