import React, { useState } from 'react'
import axios from "axios"
import Card from './components/Card';
// API IS LOREMPICSUM JAHA SE FAKE API SE HUMEIN DATA LENA HAI 
// SABSE PAHLE DO NPM I AXIOS 
// THEN IMPORT AXIOS AS AXIOS 

// AB YOU CAN USE IT PROPERLY 

const App = () => {
  const [arr, setarr] = useState([])
  async function kripalu()
  {
    console.log(("shri ji"));
    const url="https://picsum.photos/v2/list"
    // let data=axios.get(url); 
    // dekho hamesha jo data aata hai wo axios se api call karte wakt wo aata hai promises ke form mein which has 3 state
    // pending fulfilled and rejected toh await kara dete hai ki pahle mujhe batao ha ya nahi pending mein mat karke jao 
    // ya oh fulfilled (agar api sahi huwa and net chala toh) else rejeected(wrong api)
    // pedning nahi chahye mujhe isliye we want ki mujhe turant batao ha ya nahi toh
    // we use the wait keyword jo bolege pahle batao kaam karoge ya nhai phir hi mein aage ka code chalunga 
    // and await llikhne ke liye humein async function banana padega so that we can use the await keyword
    let response=await axios.get(url);
    console.log(response.data);
    // ab huemin saara data show karna hai toh we have to use the array
    setarr(response.data);
  }
  return (
    <>
    <button onClick={kripalu} className='border px-[12px] py-[10px] bg-emerald-700 rounded-[20px] m-[10px]'>Show data</button>
    {/* yaha kya dikkat kya aa raha hai ki heim agar saare data show karna hai toh we have to click on button tabhi saara data show hoga  */}
    {/* agar tum chahte toh apne aap data load ho jaaye then kya karein */}
    {/* api call and saari cheez ek function hai jismein hai wo hai kripalu ()  and aap kya kar rahe the ki button clcick pe uss function ko call kar rahe the  */}
    {/* agar tum chahte ho wo aise hi chale then 1st way diretly call the function lekin ye baar baar functionhi call karta rahega and humara code fat jayega  */}
    {/* issi liye hum chahte hai hai ki ek baar function chale bus lekin bina kisi ke help se like on clicking button etc */}

    {/* THEN HERE COMES THE USEEEFECT:JO KI HUMARE FUNCTION KO EK BAAR BUSS CALL KARNE MEIN HELP KAREGA */}
    <div className="flex flex-wrap bg-amber-400">
    {arr.map((object,index)=>
    {
      return <Card object={object} />
    })}
    </div>
    </>
  )
}

export default App
