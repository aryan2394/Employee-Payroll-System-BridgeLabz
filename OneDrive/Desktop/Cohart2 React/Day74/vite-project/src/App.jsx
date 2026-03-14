// import React from 'react'

// const App = () => {
//   const handlesubmit=(e)=>
//   {
//     e.preventDefault();
//     console.log("shri ji");
    
//   }
//   return (
//     <form onSubmit={(e)=>
//     {
//       handlesubmit(e);
//     }
//     }>
//       <input type="text" placeholder='enter your name' />
//       <button>Shri ji</button>
//     </form>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const [name, setname] = useState("");
//   function handle(e)
//   {
//     e.preventDefault();
//     console.log(name);
//     setname("");
    
//   }
//   function handleChange(e)
//   {
//     setname(e.target.value);
//   }
  
//   return (
//     <>
//     {/* onchange hi kyon lagaya directly value mein hi set kar dete value ko by e.tagert.value dekho bhai humein ab koi bhi cheezein direcly dom se interact nahi karna hai jo bhi karega wo react se karwana hai  */}
//     {/* matlab mein chahata hu ki value update karna ya kuch bhi form submit karna sab cheez jo hai react ke through ho warna humein extra virtaul dom ka koi fayda hi nahi hoga */}

//     <form onSubmit={(e)=>handle(e)}>
//       <input type="text" placeholder='enter you name ' onChange={(e)=>handleChange(e)} value={name} required/>
//       <button style={{backgroundColor:"gray",border:"1px solid black",padding:"8px 18px"}}>Shri ji</button>
//     </form>
//     </>
//   )
// }

// export default App

// AB HUM CHAHTE HAI KI NAME LIKHNE KE BAAD SAB KO HUM EK ARRAY MEIN DAAL DE 

import React, { useState } from 'react'

const App = () => {
  const [name, setname] = useState("");
  const [arr, setarr] = useState([]);
  const handleform=(e)=>
  {
      e.preventDefault();
      let newarr=[...arr];
      // these is destructuring matlab jo bhi pahli ki value thi pahle wo saari values copy lelo phir jo abi value aayi hai usko puch kar do 
      newarr.push(name);
      // lekin ye newarr mein ye sab huwa hai and ab arr mein set kar do 
      setarr(newarr);
      setname("");
      console.log(arr);
      
  }
  const handlechange=(e)=>
  {
      setname(e.target.value);
  }
  return (
    <>
    <form onSubmit={(e)=>handleform(e)}>
      <input type="text" placeholder='enter name' onChange={(e)=>{handlechange(e)}} value={name} required/>
      <button>Shri ji</button>
    </form>
    {arr.map((object,index)=>
    {
      return <h1 key={index}>Shri ji</h1>
    })}
    </>
  )
}

export default App
