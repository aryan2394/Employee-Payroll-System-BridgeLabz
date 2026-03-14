import React from 'react'
import { useParams } from 'react-router-dom'

const AboutAnything = () => {
    const {id}=useParams();
    // basically ye id help karne pe kaam aati hai 
    // jo bhi dynamically aayegi
  return (
    <div>
      <h1>Welcome to anything shri ji {id}</h1>
    </div>
  )
}

export default AboutAnything
