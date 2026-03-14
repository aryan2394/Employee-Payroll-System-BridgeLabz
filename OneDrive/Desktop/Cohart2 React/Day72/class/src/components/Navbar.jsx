import React from 'react'

const Navbar = ({name,color,arr}) => {
    console.log(name,arr);
  return (
    <>
    <div style={{backgroundColor:color}} className="flex justify-between h-[50px] w-[98%] bg-gray-500 m-[10px] px-[18px] align-center py-[8px]">
        <div className="heading">
            <h1>{name}</h1>
        </div>
        <div className="flex gap-[10px]">
           {arr.map((element,index)=>{
            return <h3 key={index}>{element}</h3>
           })}
        </div>
    </div>
    </>
    
  )
}

export default Navbar
