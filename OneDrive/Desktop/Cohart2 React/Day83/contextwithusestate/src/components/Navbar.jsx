import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Navbar = () => {
  const [theme,settheme]=useContext(ThemeContextData)
  return (
    <>
    <div className='nav'>
      <h1>Navbar Shri ji and {name}</h1>
      <button onClick={()=>settheme(theme=="dark"?"light":"dark")}>Change theme </button>
    </div>
    {theme}
    </>
  )
}

export default Navbar
