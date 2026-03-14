// Bilkul! useContext ko state ke saath use karna real-world apps me sabse common pattern hai — jaise theme toggle, auth login, language switch, etc.

// Chalo step-by-step simple example se samajhte hain 👇

// 🧱 STEP 1: Context Create karna
// import { createContext } from "react";

// export const ThemeContext = createContext();

// 🧱 STEP 2: Provider me State pass karna

// Yaha hum useState se theme handle karenge aur context me bhejenge:

// import { useState } from "react";
// import { ThemeContext } from "./ThemeContext";

// function App() {
//   const [theme, setTheme] = useState("light");

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <Home />
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// ⚙️ Important point:

// Value me hum ek object bhej rahe hain:

// { theme, setTheme }


// taaki niche components theme read bhi kare aur update bhi kar sake.

// 🧱 STEP 3: Context Consume + State Update

// Ab kisi bhi component me:

// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// function Home() {
//   const { theme, setTheme } = useContext(ThemeContext);

//   return (
//     <div>
//       <h2>Current Theme: {theme}</h2>
//       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// }

// export default Home;

// 🎯 Result kya hua?

// Home component ne value read ki: theme

// Home ne value update bhi ki setTheme()

// No props! No drilling!

// 🎁 Mental Model (Samajhne ka simple tareeka)
// Kaam	Kahan hota hai
// State ban rahi hai	Provider me
// State share ho rahi hai	Context se
// State read/update ho rahi hai	Child components me



