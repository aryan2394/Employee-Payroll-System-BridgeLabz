// introduction to react 
// react is a libraryu matlab hai ki 
// WHAT IS LIBRARY:library ka matlab hai ki hum ek particular kaam karne ke liye library ko use karte hai 
// Example:threejs (for 3d animations),silderjs (for making slides in our project) ussi tarah react for (user interface) 

// kyon use karna pada hai? 
// normal js mein dikkat ye tha ki hum kuch bhi update karte the toh poora dom update hota tha bhale hi aap kuch bhi changes jkaro 

// React:ui banane ke liye 
// ReactRouter:dom ko react se connect karne ke liye 

// How to use react in our project ?
// seareh  in google react cdn copy first two link one for react and one for reactrouter

// console.log(React);
// console.log(ReactDOM); FOR Confirmation see once in inspect console 

// How to create element in reactjs 

// let h1=React.createElement("h1",null,"Radha ju ");
// dekho yaha humne raect ke through element toth bana diya ab react ka kamm complete matlab usne ui toh bana diya ab 

// ReactRouter ki madada se ab hum isko connect  karenege and daalenege 

// usmein  hum body pe appenfdCghild karte in huamre body mein lekin hum ek container banake ab sab cheez karenge 

// ek div hoga usi men saare eleemnt jo react se abannge unheiun hum aapend karte rahenge 
// let container=document.querySelector(".container")
// let root=ReactDOM.createRoot(container);
// root.render(h1);

// lein agar hum chahe ki ek aur element banaye aur usko render karein not possible 
// lekin isse dikaat ho jayega humein sirf eke hi element thoda n banana hoga bhai 

// WHAT YOU CAN DO JITNE BHI ELEMENTS HAI UNKO EK DIV MEIN RAKH KE USS DIV KO RENDER KARA DO 

// EXAMPEL:

let h1 = React.createElement("h1", null, "priya ju");
let h2 = React.createElement("h2", null, "shri ji");

let div = React.createElement(
  "div",
  { id: "parent" },
  [h1, h2]
);

let container = document.querySelector(".container");
let root = ReactDOM.createRoot(container);
root.render(div);

// SAME HI CHEEZ AGAR AAP EK FUNCTION SE KARNA CHAHO TOH WO BHI POSSIBLE HAI 

// THIS IS MY SCRIPT.JS 
// import fnc from "./app.js";
// let div=document.querySelector(".root");
// let root=ReactDOM.createRoot(div);
// root.render(fnc());


// THIS IS MY APP.JS

// const fnc=()=>
// {
//     return React.createElement("h1",null,"shri ji");
// }
// export default fnc;
