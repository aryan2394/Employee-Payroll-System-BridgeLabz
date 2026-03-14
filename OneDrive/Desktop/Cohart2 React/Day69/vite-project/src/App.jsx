import React from 'react'
import Navbar from './components/Navbar'
import Center from './components/Center'
import Bottom from './components/Bottom'

const App = () => {
  return (
   <>
   <div className="bg-white/80">
   <Navbar/>
   <Center/>
   <Bottom/>
   </div>
   </>
  )
}

export default App
