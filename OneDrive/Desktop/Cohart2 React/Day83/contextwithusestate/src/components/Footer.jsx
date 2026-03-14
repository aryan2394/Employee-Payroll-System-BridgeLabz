import React, { useContext } from 'react'
import { ThemeContextData } from '../context/ThemeContext'

const Footer = () => {
  const [theme]=useContext(ThemeContextData)
  return (
    <div>
      <h1>Footer shri ji</h1>
      {theme}
    </div>
  )
}

export default Footer
