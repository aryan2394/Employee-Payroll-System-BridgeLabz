import React, { createContext, useState } from 'react'
export const ThemeContextData=createContext()
const ThemeContext = ({children}) => {
    // const name="lal ju"
    // dekho humne main jo hai usecontext se data ko manage karna hai lekin main hai wo usestate ko manaage karna with usecontext
    // matlab jaise hum theme change karte hai and saare app mein change theme ho jaate hai and languages change karte hai and wo poore website mein chnage reflect hota hai wo 
    // issi se hota hai usecontext with usestate 
    const [theme, settheme] = useState("light")
  return (
    <>
    {/* <ThemeContextData.Provider value={name}>
        {children}
    </ThemeContextData.Provider> */}
    <ThemeContextData.Provider value={[theme,settheme]}>
        {children}
    </ThemeContextData.Provider>
    </>
  )
}

export default ThemeContext
