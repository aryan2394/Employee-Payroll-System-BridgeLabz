// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// const App = () => {
//   const arr=[
//     {
//       name:"shri ji",
//       age:"pata nahi"
//     }
//     ,
//     {
//       name:"lal ju",
//       age:"undefined"
//     }
//   ]
//   return (
//     <div>
//       <Navbar arr={arr} age={18}/>
//       <Footer/>
//     </div>
//   )
// }

// export default App


// AB LETS STRUDYY HOW DATA IS PASSED FROM CHILD TO PARENT DEKHO HUMARA DATA JO HAI WO TOH TRANSFRE HOTA HAI FROM PARENT TO CHILD THROUNGH PROPS
// BUT CHILD TO PARENT IS NOT POSSIBLE LOGICALLY SO HUM KYA KARTE HAI KI PARENT MEIN WO FUNCTION BANATE HAI AND THEN CHILD KO UPDATE LARTE SMAY HUM PARENT MEIN DATA BHEJ DENGE
// SO LETS UNDESRATND HOW

import React from 'react'
import Navbar from "./components/Navbar.jsx"
import { useState } from 'react'
const App = () => {
  const [theme, settheme] = useState("light");
  const changeTheme=(newtheme)=>
  {
    settheme(newtheme);
  }
  return (
    <>
    <h1>Theme is {theme}</h1>
    <Navbar changeTheme={changeTheme} />
    </>
  )
}

export default App
