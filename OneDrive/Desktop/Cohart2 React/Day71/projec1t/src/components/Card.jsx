import React from 'react'
import "../index.css"
import {Star,SlidersHorizontal} from "lucide-react"
const Card = ({object}) => {
  return (
   <>
   <div className="h-[300px] w-[300px] flex flex-col bg-white  p-[10px] gap-[30px]">
    <div className="flex flex-col  ">
      <div className="flex justify-between ">
        <Star />
        <img className='h-[50px] w-[60px] object-cover rounded-[30px]' src={object.image} alt="shri ji" />
        <SlidersHorizontal />
      </div>
      <h2 className='text-center font-bold'>{object.username}</h2>
      <p className='text-sm text-center font-[italic]'>{object.name} </p>
    </div>
    <div className="m-[20px] ">
      <p className='text-center'>{object.description}</p>
    </div>
    <div className="flex justify-between">
      <div className="media">
        <p>{object.posts}</p>
        <h3>Media</h3>
      </div>
      <div className="followers">
        <p>{object.followers}</p>
        <h3>Followers</h3>
      </div>
      <div className="following">
        <p>{object.following}</p>
        <h3>Following</h3>
      </div>
    </div>
   </div>
   </>
  )
}

export default Card
