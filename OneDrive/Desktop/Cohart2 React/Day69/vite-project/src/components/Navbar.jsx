import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between h-[80px] w-[100%] text-black p-[15px] border border-white/30">
        <div className="font-[400] text-2xl">
            <h2 className='m-[10px]'>Horizon Courts</h2>
        </div>
        <div className="flex gap-[60px] align-center justify-center m-[10px] ">
            <button className="px-[10px]  border border-gray-400  rounded-[20px]">About Us</button>
            <h3>Services</h3>
            <h3>Coaches</h3>
            <h3>Events</h3>
            <h3>Contacts</h3>
            <h3>More</h3>
        </div>
        <div className="third">
            <button className="px-[10px] py-[8px] border border-gray-400 text-green rounded-[20px]">Buy Now</button>
        </div>
    </div>
  )
}

export default Navbar
