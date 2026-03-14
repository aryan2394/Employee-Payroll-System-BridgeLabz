import React from 'react'

const Card = ({object,deleteuser,index}) => {
  
  return (
    <>
    <div className="flex items-center flex-col h-auto w-[25%] border-emerald-800 bg-emerald-700 gap-[12px] m-[20px] rounded-[20px] overflow-auto py-[15px]">
        <img className='object-cover h-[50px] rounded-[50%]' src={object.url} alt="image" />
        <h1 className='text-2xl font-semibold'>{object.name}</h1>
        <h2>{object.role}</h2>
        <p className='text-center font-thin'>{object.desc}</p>
        <button className='border rounded-[10px] px-[10px] py-[10px] text-[18px] w-[35%] bg-amber-800 cursor-pointer active:scale-95' onClick={()=>deleteuser(index)}>Remove</button>
    </div>
    </>
  )
}

export default Card
