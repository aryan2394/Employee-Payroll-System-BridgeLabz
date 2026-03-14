import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [name, setname] = useState("")
  const [role, setrole] = useState("")
  const [desc, setdesc] = useState("")
  const [url, seturl] = useState("")
  let data=localStorage.getItem("arr")||[]
  const [arr, setarr] = useState(data)
  const handlesumbit=(e)=>
  {
    e.preventDefault();
    let newusers=[...arr,{name,role,desc,url}];
    console.log(newusers);
    setarr(newusers);
    setdesc("");
    setname("");
    seturl("");
    setrole("");
    localStorage.setItem("data",JSON.stringify(newusers));
  }
  const deleteuser=(index)=>
  {
    let newarr=[...arr];
    newarr.splice(index,1);
    setarr(newarr);
    localStorage.setItem("data",JSON.stringify(newarr));
  }
  return (
    <>
    <div className="h-screen bg-black text-white p-[30px]" onSubmit={(e)=>handlesumbit(e)}>
      <form className='flex flex-wrap gap-6'>
        <input type="text" placeholder='enter your name' className='border rounded-[10px] px-[10px] py-[10px] text-[18px] w-[35%]' onChange={(e)=>setname(e.target.value)} value={name} />
        <input type="text" placeholder='enter image url' className='border rounded-[10px] px-[10px] py-[10px] text-[18px] w-[35%]' onChange={(e)=>seturl(e.target.value)} value={url}/>
        <input type="text" placeholder='enter role' className='border rounded-[10px] px-[10px] py-[10px] text-[18px] w-[35%]' onChange={(e)=>setrole(e.target.value)} value={role}/>
        <input type="text" placeholder='enter description' className='border rounded-[10px] px-[10px] py-[10px] text-[18px] w-[35%]' onChange={(e)=>setdesc(e.target.value)} value={desc}/>
        <button className='border rounded-[10px] px-[10px] py-[10px] text-[18px] w-[50%] bg-emerald-700 text-center mx-[100px]'>Create User</button>
      </form>
      <div className="flex flex-wrap gap-[20px]">
      {arr.map((element,index)=>
      {
        return <Card key={index} object={element} deleteuser={deleteuser} index={index}/>
      })}
      </div>
    </div>
    </>
  )
}

export default App
