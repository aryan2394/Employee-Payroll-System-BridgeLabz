import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'

const Products = () => {
    const arr=useContext(ProductDataContext)
  return (
    <>
    <div className="parent">
    {arr.map((element,index)=>
    {
      return <Link to={`${element.id} `} key={index}>
      <div className='card'>
        <img src={element.image}/>
        <h5>{element.title}</h5>
      </div>
      </Link>
    })}
    </div>
    </>
  )
}

export default Products
