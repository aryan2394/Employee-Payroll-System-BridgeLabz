import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setname] = useState("")
  const [count, setcount] = useState(0)
  // useEffect(()=>
  // {
  //     console.log("shri ji");
      
  // })

  // YE KYA HO RAHA HAI KI HAR BAAR UPDATE HONE PE UI LIKE TYPEING TEXT AUR BUTTON CLICK KISIS SE BHI HOGA
  // useEffect(()=>
  // {
  //   console.log("shri ji");
  // },[])

  // SIRF EK HI BAAR SABSE PAHLI BAAR MEIN HI UPADET HOAG UI TABHI USEEEFECT CHAEGA 

  useEffect(()=>
  {
    console.log("shri ji");
  },[count])

  // jAB SIRF COUNT UPDATE HOAG THEN ONLY IT USEFFECT WILL DUN
  return (
   <>
   <input type="text" placeholder='enter name' value={name} onChange={(e)=>setname(e.target.value)} />
   <button>Change</button>
   <h1>{count}</h1>
   <button onClick={(e)=>setcount(count+1)}>Increase</button>
   </>
  )
}

export default App
