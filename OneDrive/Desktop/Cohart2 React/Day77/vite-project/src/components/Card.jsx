import React from 'react'

const Card = ({object}) => {
  
  return (
    <>
    <div className="flex items-center flex-col h-auto w-[25%] border-emerald-800 bg-emerald-700 gap-[12px] m-[20px] rounded-[20px] overflow-auto py-[15px]">
        <img className='object-cover h-[50px] rounded-[50%]' src={object.download_url} alt="image" />
        <h1 className='text-2xl font-semibold'>{object.author}</h1>
    </div>
    </>
  )
}

export default Card
