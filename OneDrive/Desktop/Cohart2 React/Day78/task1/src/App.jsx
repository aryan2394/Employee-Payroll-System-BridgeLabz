// THESE IS TASK1 THAT IS RANDOM DATA GENEERATETOR 

// import React, { useState } from 'react'
// import axios from "axios"
// const App = () => {
//   const [arr, setarr] = useState([]);
//   async function shriji()
//   {
//     let url="https://randomuser.me/api/";
//     let response=await axios.get(url);
//     console.log(response.data.results);
//     setarr(response.data.results)
//   }
//   return (
//     <>
//     {/* <button className='border rounded-[12px] px-[16px] py-[8px] bg-emerald-700 m-[10px]' onClick={shriji}>Get Random Data</button> */}
//     {/* ab useeefect ke saath */}
//     {arr.map((object,index)=>
//     {
//       return <div key={index} className='border bg-amber-400 h-auto p-[12px] w-fit rounded-[18px]'>
//         <img src={object.picture.medium} alt="image" />
//         <h1>{object.name.first+" "+object.name.last}</h1>
//         <h3>Gmail:{object.email}</h3>
//         <p>Gender:{object.gender}</p>
//         <h4><b>{object.location.city}</b></h4>
        
//       </div>
//     })}
//     </>
//   )
// }

// export default App

// SAME USING USEFFECT 
import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {
  const [arr, setarr] = useState([]);
  async function shriji()
  {
    let url="https://randomuser.me/api/";
    let response=await axios.get(url);
    console.log(response.data.results);
    setarr(response.data.results)
  }
  useEffect(()=>
  {
    shriji();
  },[])
  return (
    <>
    {arr.map((object,index)=>
    {
      return <div key={index} className='border bg-amber-400 h-auto p-[12px] w-fit rounded-[18px]'>
        <img src={object.picture.medium} alt="image" />
        <h1>{object.name.first+" "+object.name.last}</h1>
        <h3>Gmail:{object.email}</h3>
        <p>Gender:{object.gender}</p>
        <h4>City :<b>{object.location.city}</b></h4>
        
      </div>
    })}
    </>
  )
}

export default App
