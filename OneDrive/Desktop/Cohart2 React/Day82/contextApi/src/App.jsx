// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <>

//     <Navbar name="shri ji and lal ju">
//       {/* agar hum child function ko uske child bhejne chahte hai then we can get open and close tag  */}
//       <h1>Child 1</h1>
//       <h2>Child 2</h2>
//       {/* child and props mein fark hai ki props mein data jaat hai direclty structuring */}
//     </Navbar>
//     <Footer/>
//     </>
//   )
// }

// export default App

// ab humein padhna hai context api ko
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from "./components/Footer.jsx"
const App = () => {
  return (
    <>
    <Navbar/>
    <Footer/>
    </>
  )
}

export default App
