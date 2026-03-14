import ReactDOM from "react-dom/client"
import Abc from "./App.jsx"
import "./index.css"
let div=document.querySelector("#root");
let root=ReactDOM.createRoot(div);
// root.render(abc());
// or 
root.render(<Abc/>); 
// these is the way of running function of jsx self closing mein band kar do 