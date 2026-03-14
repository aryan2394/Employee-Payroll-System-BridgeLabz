// import React, { useState } from 'react'

// const App = () => {
//   const [count, setcount] = useState(0);
//   const increase=()=>
//   {
//     console.log(count);
    
//     setcount(count+1);
//     // this method of setting these is a asynchoronous task matlb ui toh updae turant ho jayega lekin if you will print the value before and aftre the value change 
//     // toh 0 0 hi print hoga beacuse neeche wala line synchonous hai toh pahle wo chal jayega and phir baad mein setcount update karega value beacuse synchonous task pahle chal jayenge phir asynchoous chalte hai
//     // usko rokne we use async and await 
//     console.log(count);
    
//   }
//   const decrease=()=>
//   {
//     setcount(count-1);

//  LEKIN AGAR TUM YE Kroge ki 
// setcount(count-1);
// setcount(count-1);
// setcount(count-1);

// TOH KYA TEEN BAAR UPDATE HOGA NAHI EK HI BAAR BECAUSE WO SIRF EK HI BAAR KAREGA ISS FUNCTION MEIN BEACUSE UKSE LAST VALUE HI NAHI PATA CHAL RAHI HAI
// BUT IF YOU WANT KI 3 BAAR 1 BADHE THEN 
// setcount(prev=>(prev-1))
// setcount(prev=>(prev-1))
//   }
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button onClick={increase} className='btn'>Shri ji I</button>
//       <button onClick={decrease} className='btn'>Shri ji D</button>
//     </div>
//   )
// }

// export default App

// Task 2: Toggle Text

// Requirements

// Ek button ho

// Click pe text show / hide ho

// Button text change ho:

// import React, { useState } from 'react'

// const App = () => {
//   const [name, setname] = useState("Shri ji")
//   const hide=()=>
//   {
//     setname("");
//   }
//   const show=()=>
//   {
//     setname("shri ji");
//   }
//   return (
//     <>
//     <div>
//       <h1>{name}</h1>
//     </div>
//       <button className='btn' onClick={hide}>Hide</button>
//       <button className='btn' onClick={show}>Show</button>
//     </>
      
//   )
// }

// export default App


// Task 3: Change Background Color
// Requirements
// Button click pe background color change ho
// Colors: red → blue → green → black
// 👉 Hint: array + index state

import React, { useState } from 'react'

const App = () => {
  let arr=["orange","red","green"]
  const [index, setindex] = useState(0);

  const change=()=>
  {
      setindex((index+1)%arr.length);
  }
  return (
    <>
    <button style={{backgroundColor:arr[index]}} onClick={change} className='btn'>Change background color</button>
    </>
    
  )
}

export default App;
