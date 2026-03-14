// import React from 'react'
// import AllSections from './AllSections'

// const Navbar = ({arr,age}) => {
    
    
//   return (
//     <div>
//       <h1>Navbar Shri ji</h1>
//       <AllSections arr={arr}/>
//     </div>
//   )
// }

// export default Navbar

// CHILD TO PARENT DATA TRANSFER 
import React from 'react'
import { useState } from 'react'

const Navbar = ({changeTheme}) => {
  const [newtheme, setnewtheme] = useState("")
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(newtheme);
    changeTheme(newtheme)
    setnewtheme("");
  }
  return (
    <>
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input value={newtheme} type="text" placeholder='enter you theme' onChange={(e)=>setnewtheme(e.target.value)} />
      <button>Submit</button>
    </form>
    </>
  )
}

export default Navbar

