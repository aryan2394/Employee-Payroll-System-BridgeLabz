import React from 'react'
import Section1 from './Section1';

const AllSections = ({arr}) => {
    // console.log(arr);
    
  return (
    <div>
      <h1>All sections Shri ji</h1>
      <Section1 arr={arr}/>
    </div>
  )
}

export default AllSections
