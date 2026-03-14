import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
export const ProductDataContext=createContext()
const ProductContext = ({children}) => {
  const [arr, setarr] = useState([])
  const getData=async ()=>
  {
    const url="https://fakestoreapi.com/products"
    const response=await axios.get(url);
    setarr(response.data);
  }
  useEffect(()=>
    {
      getData()
    },[])
  return (
    <>
    <ProductDataContext.Provider value={arr}>
        {children}
    </ProductDataContext.Provider>
    </>
  )
}

export default ProductContext
