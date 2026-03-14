import React from 'react'

const Card = ({object}) => {
    console.log(object);
  return (
    <>
    <div className="flex flex-col text-center border rounded-[10px] h-[80px] w-[150px] bg-amber-600">
    <h1>`Name is {object.name}`</h1>
    <h3>`Phone is {object.phone}`</h3>
    <p>`Description is {object.description}`</p>
    </div>
    </>
  )
}

export default Card;