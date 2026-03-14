import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import Product from './pages/Products'

const App = () => {
  return (
   <>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<AllProducts/>}/>
      <Route path='/products/:id' element={<Product/>}/>
   </Routes>
   </>
  )
}

export default App
