import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
const App = () => {
  const [arr, setarr] = useState([])
  const getData=async ()=>
  {
    const url="https://fakestoreapi.com/products"
    const response=await axios.get(url);
    setarr(response.data);
  }
  // getData()
  // instead of calling in any function or with any hepl of any button clcick then use the useeefecty hook
  useEffect(()=>
  {
    getData()
  },[])
  return (
    <>
    {/* <div className="parent">
    {arr.map((element,index)=>
    {
      return <div key={index} className='card'>
        <img src={element.image}/>
        <a>{element.title}</a>
      </div>
    })}
    </div> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductDetail/>}/>
    </Routes>
    </>
  )
}

export default App
