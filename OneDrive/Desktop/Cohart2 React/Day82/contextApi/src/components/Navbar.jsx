// import React from 'react'

// const Navbar = ({name,children}) => {
//     // console.log(children[0]);
//     // console.log(children[1]);
//   return (
//     <>
//     <div className='h-auto p-[10px] w-screen bg-emerald-600'>
//         <h1 className='text-2xl'>These is navbar {name}</h1>
//         {/* Her we learn how to deal wth the children of parent */}
//         {children}
//     </div>
//     </>
//   )
// }

// export default Navbar

// ContextApi

import React from 'react'
import { useContext } from 'react'
import { UserPostContext } from '../context/UserContext'

const Navbar = () => {

  // data toh bhej diya gaya aapko lekin aapko usko receive bhi toh karna hai then usecontext and wo jo main hai usko useconetxt mein paas kardo and
  // now you can use the data globallyy
  const arr=useContext(UserPostContext)
  return (
    <>
    <div className='h-auto p-[10px] w-screen bg-emerald-600'>
        {arr.map((ele,index)=>
        {
          return <div key={index}>
            <h1>{ele.username}</h1>
            <h2>{ele.content}</h2>
          </div>
        })}
    </div>
    </>
  )
}

export default Navbar
