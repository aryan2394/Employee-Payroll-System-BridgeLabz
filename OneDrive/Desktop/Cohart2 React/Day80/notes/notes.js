// React Router DOM kya hai?

// React Router DOM ek library hai jo React app me multiple pages / routes handle karne ke kaam aati hai without page reload.

// Matlab:

// URL change hota hai

// Page reload nahi hota

// App fast & smooth (SPA) rehta hai

// 🔹 React Router DOM kyon use karein?
// 1️⃣ Single Page Application (SPA) ke liye

// React app normally single page hota hai.
// Router help karta hai:

// /home
// /about
// /contact


// jaise pages dikhane me — bina refresh ke.

// 2️⃣ Page reload nahi hota 🚀

// Normal HTML me:

// <a href="/about">About</a>


// ➡️ pura page reload 😖

// React Router me:

// <Link to="/about">About</Link>


// ➡️ no reload, sirf component change 😍

// 3️⃣ URL ke hisaab se component render hota hai
// /home   → Home component
// /login  → Login component
// /profile → Profile component

// 4️⃣ Real website jaisa feel

// User ko lagta hai:

// Proper pages hain

// Back / Forward button kaam karta hai

// Bookmark kar sakte hain

// 🔹 Important Components (MOST IMPORTANT)
// 🔸 1. BrowserRouter

// 👉 Puri app ko wrap karta hai

// import { BrowserRouter } from "react-router-dom";

// <BrowserRouter>
//   <App />
// </BrowserRouter>


// 📌 Without this → routing kaam nahi karegi

// 🔸 2. Routes

// 👉 Saare routes ka container

// <Routes>
//   ...
// </Routes>

// 🔸 3. Route

// 👉 Kis URL pe kaunsa component

// <Route path="/about" element={<About />} />

// 🔸 4. Link

// 👉 Page change karne ke liye (anchor tag ka React version)

// <Link to="/login">Login</Link>


// ❌ href use mat karo
// ✅ Link use karo

// 🔸 5. NavLink (Active class ke liye)
// <NavLink to="/home">Home</NavLink>


// 📌 Automatically active link ko style de sakte ho

// 🔹 Hooks (VERY IMPORTANT)
// 🔹 useNavigate()

// 👉 Button click pe page change

// const navigate = useNavigate();
// navigate("/login");


// Use case:

// Login ke baad redirect

// Form submit ke baad next page

// 🔹 useParams()

// 👉 URL se dynamic value lene ke liye

// <Route path="/user/:id" element={<User />} />

// const { id } = useParams();


// 📌 /user/5 → id = 5

// 🔹 useLocation()

// 👉 Current URL info lene ke liye

// const location = useLocation();

// 🔹 Dynamic Routing (IMP 🔥)
// <Route path="/product/:productId" element={<Product />} />


// Real life example:

// /product/101
// /product/202

// 🔹 Nested Routing (Advanced but useful)
// /dashboard
// /dashboard/profile
// /dashboard/settings


// Dashboard ke andar pages — professional apps me common

// 🔹 404 Page (Not Found)
// <Route path="*" element={<NotFound />} />


// Agar galat URL aaye → error page

// 🔹 React Router DOM kab use karein?

// ✅ Jab:

// Multi-page React app ho

// Login / Dashboard / Admin panel ho

// URL important ho

// ❌ Jab:

// Sirf ek hi page ka chota app ho

// 🔹 Short Summary 🧠

// React Router DOM = navigation system

// Page reload nahi hota

// URL ke hisaab se component render hota hai

// BrowserRouter, Routes, Route, Link MOST IMPORTANT

// useNavigate, useParams real-world use ke liye MUST

// Agar chaho to next step me main:

// 🔹 Project structure

// 🔹 Login + Protected Route

// 🔹 Real mini example (code ke saath)

// batao kya chahiye 👍

// types of routers

// React Router DOM me Types of Routers ko main simple Hinglish + exam/interview friendly way me samjha raha hoon 👇

// 🔹 Types of Routers in React Router DOM

// React Router me mainly 3 types ke routers hote hain (web apps ke liye):

// 1️⃣ BrowserRouter (MOST USED ✅)
// 👉 Kya hai?

// HTML5 History API use karta hai

// Clean & normal URL deta hai

// 🔹 Example:
// import { BrowserRouter } from "react-router-dom";

// <BrowserRouter>
//   <App />
// </BrowserRouter>

// 🔹 URL kaise dikhega?
// example.com/about
// example.com/login

// 🔹 Kab use karein?

// ✅ Jab:

// Normal React website ho

// Hosting properly configured ho (Netlify, Vercel, etc.)

// 🔹 Pros:

// ✔ Clean URL
// ✔ Real website jaisa feel
// ✔ SEO friendly

// 🔹 Cons:

// ❌ Agar server config na ho → refresh pe 404 aa sakta hai

// 2️⃣ HashRouter (# wala router)
// 👉 Kya hai?

// URL me # (hash) use karta hai

// Browser history API use nahi karta

// 🔹 Example:
// import { HashRouter } from "react-router-dom";

// <HashRouter>
//   <App />
// </HashRouter>

// 🔹 URL kaise dikhega?
// example.com/#/about
// example.com/#/login

// 🔹 Kab use karein?

// ✅ Jab:

// Server configuration ka control na ho

// GitHub Pages jaisi hosting ho

// 🔹 Pros:

// ✔ Refresh pe 404 nahi aata
// ✔ Simple hosting

// 🔹 Cons:

// ❌ URL ugly lagta hai
// ❌ SEO ke liye acha nahi

// 3️⃣ MemoryRouter (Testing ke liye)
// 👉 Kya hai?

// URL browser me show hi nahi hota

// Memory ke andar routes store hote hain

// 🔹 Example:
// import { MemoryRouter } from "react-router-dom";

// 🔹 Kab use karein?

// ✅ Jab:

// Unit testing kar rahe ho

// React Native jaise environment me

// 🔹 Pros:

// ✔ Testing ke liye best
// ✔ Browser dependency nahi

// 🔹 Cons:

// ❌ Real website ke liye use nahi hota

// 🔹 Extra Routers (Less Common)
// 4️⃣ StaticRouter

// Server Side Rendering (SSR) ke liye

// Mostly Next.js / SSR apps me

// 🔹 One-Line Comparison 🧠
// Router	URL Style	Best Use
// BrowserRouter	/about	Real websites
// HashRouter	/#/about	GitHub Pages
// MemoryRouter	No URL	Testing
// StaticRouter	Server based	SSR
// 🔹 Interview Trick 💡

// Q: Which router is most commonly used?
// 👉 BrowserRouter

// Q: GitHub Pages pe kaunsa router?
// 👉 HashRouter

// Agar chaho to main next:

// 🔹 BrowserRouter vs HashRouter deep difference

// 🔹 Protected Routes example

// 🔹 Diagram ke through routing samjhaun

// Bas batao 👍