// 


import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-black text-white h-[40px]">
        <div className="first">
          <h3>DVSY</h3>
        </div>

        <div className="second flex gap-4">
          <button className="px-8 py-20 border border-gray-400 rounded bg-black text-white">Designers</button>
          <button className="p-2.5">Collabs</button>
          <button className="p-2.5">Events</button>
          <button className="p-2.5">Blog</button>
          <button className="p-2.5">Card</button>
          <button className="p-2.5">Set in Touch</button>
        </div>
      </div>
    </>
  )
}

export default Navbar

