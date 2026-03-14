import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import AboutAnything from './pages/AboutAnything'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <>
    {/* <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}></Route>
    </Routes> */}
    {/* chalo ye toh thik hai lekin humein properly hu  link ko kholna pad raha hai by manualy to go to home or about page or any other page */}

    {/* Dynamic routes ab next topic  */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/abouto/:id' element={<AboutAnything/>}></Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    </>
  )
}

export default App
