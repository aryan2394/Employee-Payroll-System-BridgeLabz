import React from 'react'
// ab humein chahiye ki jab product pages click karein then product page khule jab about toh khule then we acan use link not anchor tag 
// link jo hai by default react-rouetr-dom deta hai
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="flex justify-between p-[10px] h-[50px] bg-emerald-400">
    <div>
      <h1>Welcome to the Website and World of Shri ji</h1>
    </div>
    <div className='flex gap-[14px]'>
        <Link to={"/"}>Home PAGE</Link>
        <Link to={"/about"}>About page</Link>
        <Link to={"/product"}>Product</Link>
    </div>
    </div>
    </>
  )
}

export default Navbar
