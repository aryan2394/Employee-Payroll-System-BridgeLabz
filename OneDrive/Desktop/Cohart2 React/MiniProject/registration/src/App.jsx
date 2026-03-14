import React, { useState } from 'react'
import Card from './components/Card';

const App = () => {
  const [name, setname] = useState("")
  const [phone, setphone] = useState("");
  const [arr, setarr] = useState([])
  const [description, setdescription] = useState("")
  function handlesubmit(e)
  {
    e.preventDefault();
    let newarr=[...arr];
    newarr.push({name,phone,description});
    setarr(newarr);
    console.log(newarr);
    setname("");
    setphone("");
    setdescription("");
  }
  return (
    <>
    <div className="h-screen">
    <form className='flex gap-[14px]' onSubmit={(e)=>handlesubmit(e)}>
      <input className='border rounded  px-[10px] py-[4px] leading-0 h-fit my-[10px]' type="text" placeholder='enter name' onChange={(e)=>setname(e.target.value)} value={name} required/>
      <input className='border rounded  px-[10px] py-[4px] leading-0 h-fit my-[10px]' type="number" placeholder='enter phone no' onChange={(e)=>setphone(e.target.value)} value={phone} required/>
      <textarea className='border rounded  ' placeholder='enter description' value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>
      {/* <button className='border rounded bg-amber-700 py-[16px] leading-none '>Save</button> */}
      <button className="border rounded bg-amber-700 px-[16px] py-[10px] my-[10px] leading-none h-fit">
  Save
</button>

    </form>
    <div className="flex gap-[10px]">
    {arr.map((object,index)=>
    {
        return <Card object={object} key={index}/>
    })}
    </div>
    </div>
    </>
  )
}

export default App
