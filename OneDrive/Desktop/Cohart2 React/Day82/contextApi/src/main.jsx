// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// ab context api sabse pahla step wrap app with context api main file
// fir context banao apni file mein because abhi aapne sirf wrap kiya hai buss
// dekho ab aapne usercontext jo hai wo ek normal function call and aapne usmein props nahi pass kiya buss pass kiya hai wo hai children
// toh agar ab aap cchhate ho ki saare usercontext ke child dikhe toh usercontext mein {children} likh dena and 
// {children} hai app toh automatiaclly children(app.jsx call hoga and uske anadar ki saari cheezein visible ho jayegi) heumein
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserContext>
    <App/>
  </UserContext>
)