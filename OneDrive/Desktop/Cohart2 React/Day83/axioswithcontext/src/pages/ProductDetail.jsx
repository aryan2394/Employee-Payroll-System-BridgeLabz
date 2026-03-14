import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductDataContext } from '../context/ProductContext'

const ProductDetail = () => {
  let {id}=useParams()
  let arr=useContext(ProductDataContext)
  console.log(id);
  let data=arr.find()
  return (
    <>
    <h1>Product details </h1>
    </>
  )
}

export default ProductDetail
