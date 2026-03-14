// 1:npm i react-router-dom
// 2:in main.jsx import {BrowserRouter} from "react-router-dom" 
// 3:warap App.jsx with BrowserRouter in main.jsx 
// import {Routes,Route} from "react-router-dom"
// 4:make Routes(collection of all routes) and usmein route banana ki kaun kaun se pages honge and eveerything
// 5:har ek Route mein mention the path (matlba ksipe jaana hai) and element{kaun sa eleemnt render hoga} 
// eg:Routes uske andar Route < path="/" element={<Home/>}

// {/* chalo ye toh thik hai lekin humein properly hu  link ko kholna pad raha hai by manualy to go to home or about page or any other page */}
// Toh hum ek navbar banaynege jiski madad se hum unn pages mein ja payenge 
// best one is anchor tag(a tag):a link="/about" lekin ye sahi nahi hai because ye humare page ko relaod karega toh what we want ki page reloa n ho

// THEN USE THE LINK BY REACT ROUTER DOM(TO GO TO DIFFERNT PAGES NOT BY ANCHOR TAG) YE HUMARE PAGE KO RELOAD NAHI HONE DETA HAI 


// Dynamic Routing kya hoti hai?

// URL ka ek part dynamic (changeable) hota hai, aur us value ke basis par alag data / page dikhaya jata hai.

// Simple words:

// Static route → /about

// Dynamic route → /user/101, /user/202

// Yahan 101, 202 dynamic hai

// 📌 Real-life example 🧑‍💼

// Instagram / Amazon dekho:

// /product/123

// /product/999

// 👉 Product same page, bas ID change hoti hai

// 🧠 React Router me kaise karte hain?


// 1️⃣ Route me :parameter use hota hai
// <Route path="/user/:id" element={<User />} />


// :id → dynamic parameter

// 2️⃣ useParams() se value nikalte hain
// import { useParams } from "react-router-dom";

// function User() {
//   const { id } = useParams();

//   return <h2>User ID: {id}</h2>;
// }