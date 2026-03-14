import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  let age=18;
  return (
    <>
    {/* <Navbar name='shri ji and lal ju' color="red" arr={["shri ji","shri ji","lal lu","priya ju"]}/>
    <Navbar name='shri ji and lal ju and sakhiya' color="green"  arr={["sakhiya","sadguru bhagwan","lal lu","priya ju"]}/> */}
    {/* haa ek aur cheez jaise aap chahte ho ki background color of navbar bhi chnage hi jaaye then jo r */}
    {/* receive karega usko uss property ko normal css mein buss likho not in tailwind css see */}


    {/* Next topic that is conditional rendering */}
    {/* matlab ki condition ke hisab se render  */}
    
    {age>=18 ? <h1>shri ji</h1>:<h2>lal ju</h2>}
    </>
  )
}

export default App
