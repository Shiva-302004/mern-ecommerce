import React, { useState, useEffect } from 'react'
import remove_icon from "../../assets/cross_icon.png"
import "./ListProduct.css"
const ListProduct = () => {
  const [allproducts, setallproducts] = useState([])
  const fetchInfo = async () => {
    await fetch("http://localhost:8000/allproducts", {
      method: "GET",
      headers: {
        "Content-Type": "Application/json"
      }
    }).then((res) => res.json())
      .then((data) => setallproducts(data))
      .catch((err) => alert(data.msg, err))
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  const removeproduct=async(id)=>{
    await fetch('http://localhost:8000/removeproduct',{
      method:"POST",
      headers:{
        Accept:"application/json",
        'Content-Type':"application/json"
      },
      body:JSON.stringify({id})
    })
    await fetchInfo()
  }
  return (
    <div className='hi flex flex-col m-2 sm:m-3 lg:h-[90vh] lg:overflow-y-scroll lg:w-[80vw] lg:mx-7' >
      <h1 className='text-2xl '>All Products List</h1>
      <div className='flex justify-between '>
        <div className='flex  '>
          <p className='text-[12px] lg:text-lg'>Products</p>
          <p className='text-[12px] ml-5 sm:ml-10 lg:text-lg'>Title</p>
        </div>
        <p className='text-[12px] ml-5 sm:ml-32 lg:ml-32 lg:text-lg'>Old Price</p>
        <p className='text-[12px] ml-1 lg:text-lg'>New Price</p>
        <p className='text-[12px] ml-1 lg:text-lg'>Category</p>
        <p className='text-[12px] ml-1 lg:text-lg'> Remove</p>
      </div>
      {
        allproducts.length>0?
        <div className=''>
          <hr />
          {allproducts.map((e, i) => {
            return<div key={i} className='flex flex-col mx-2 mt-3 lg:mt-16 '>
             <div className='flex justify-between mb-3' >
              <div className='flex justify-between'>
              <img className='w-[50px] h-[50px]' src={e.image} alt="" />
              <p className='text-[12px] sm:text-[15px] ml-4 sm:ml-8 w-[30px] sm:w-auto lg:text-[20px]lg:w-[40px]'>{e.name}</p>
              </div>
              <p className='text-[16px] ml-2 lg:text-[20px]'>${e.old_price}</p>
              <p className='text-[16px] lg:text-[20px]'>${e.new_price}</p>
              <p className='text-[16px] lg:text-[20px]'>{e.category}</p>
              <img className='w-4 h-4 p-1' src={remove_icon} onClick={()=>{removeproduct(e.id)}} alt="" />
            </div>
            <hr className='bg-black'/>
            </div>
          }
          )}
          </div>
          :
          <div> No items</div>
      }
    </div>
  )
}

export default ListProduct