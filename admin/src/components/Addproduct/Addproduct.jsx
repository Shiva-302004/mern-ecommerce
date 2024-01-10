import React, { useState } from 'react'
import upload_area from "../../assets/upload_area.svg"
const Addproduct = () => {
  const [image,Setimage]=useState(false)
  const ImageHandler=(e)=>{
    Setimage(e.target.files[0])
    console.log(e.target.files[0])
  }
  const [productdetails,setproductdetails]=useState({
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:"",
  })
  const changehandler=(e)=>{
    setproductdetails({...productdetails,[e.target.name]:e.target.value})
  }
  const Addproduct=async(e)=>{
    e.preventDefault()
    console.log(productdetails)
    let responseData;
    let product=productdetails

    let formdata=new FormData()
    formdata.append('product',image)

    await fetch('http://localhost:8000/uploadimage',{
      method:"POST",
      headers:{
        Accept:'application/json'
      },
      body:formdata
    })
    .then((res)=>res.json()).then((data)=>{responseData=data})
    if(responseData.success){
      product.image=responseData.image_url
      await fetch('http://localhost:8000/addproduct',{
        method:"POST",
        headers:{
          Accept:"Application/json",
          "Content-Type":"Application/json",
        },
        body:JSON.stringify(product),
      }).then((res)=>res.json()).then((data)=>{
        data.success?alert(data.msg):alert(data.msg)
      }).catch((err)=>console.log(err))
    }
    console.log(product)
    console.log(responseData)
  }
  return (
    <div className='flex flex-col justify-center  bg-slate-100 m-2 p-2 lg:w-[60vw] lg:mt-4 lg:ml-10 lg:justify-normal '>
        <div className='flex flex-col mt-4 lg:ml-4 '>
          <p>Product Title</p>
          <input className='w-[90vw] h-12 p-2 lg:w-[55vw]' minLength={7} value={productdetails.name} type="text" name="name" placeholder='type here' id="name" onChange={changehandler}/>
        </div>
        <div className='flex flex-row mt-4 lg:ml-4  '>
          <div>
            <p>Price</p>
            <input className='w-[42vw] h-12 p-2 mt-2 lg:w-[25vw]' value={productdetails.old_price} type="text" name='old_price' placeholder='old_price' id='old_price' onChange={changehandler}/>
          </div>
          <div className='ml-[5vw]'>
            <p>Offer Price</p>
            <input className='w-[42vw] h-12 p-2 mt-2 lg:w-[25vw]' value={productdetails.new_price} type="text" name='new_price' placeholder='new_price' id='old_price' onChange={changehandler}/>
          </div>
        </div>
        <div className='mt-4 lg:ml-4 '>
          <p>Product Category</p>
          <select className='w-[40vw] h-12 p-2 text-slate-400 lg:w-[25vw]' value={productdetails.category} name='category' onChange={changehandler}>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kid">kid</option>
          </select>
        </div>
        <div className='mt-4 lg:ml-4 '>
          <label htmlFor="image-input">
            <img src={image?URL.createObjectURL(image):upload_area} className='w-[200px] h-[200px]'  alt="" />
          </label>
          <input onChange={ImageHandler} type="file" name="image" id="image-input" hidden/>
        </div>
        <button className='w-[200px] h-12 bg-blue-600 text-white p-2 mt-4 mb-5 rounded-md lg:ml-4 '  onClick={Addproduct}>Add Product</button>
    </div>
  )
}

export default Addproduct