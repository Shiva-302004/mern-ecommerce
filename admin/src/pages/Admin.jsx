import React from 'react'
import Sidebar from '../components/sidebar/Sidebar'
import {Routes,Route } from 'react-router-dom'
import ListProduct from '../components/Listproduct/ListProduct'
import Addproduct from '../components/Addproduct/Addproduct'
const Admin = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <Sidebar/>
      
      <Routes>
        <Route path='/' element={<Addproduct/>}/>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
      </Routes>
      
    </div>
  )
}

export default Admin