// dekho bhai react ka kaam hai ui banana lekin agar aap chahte ho ki ui ke saath saath agar koi kaam side meinh bhi chalta rahe then you can use the side effect

// Side effects kya hote hain?

// Side effects wo kaam hote hain jo UI show karne ke alawa hote hain, jaise:

// API se data lana

// Timer lagana

// Event listener add karna

// Browser ke saath interact karna

// Document title change karna

// 🧠 Simple socho:

// UI banana = React ka kaam

// Extra kaam = useEffect ka kaam

// cASE1:JAB AAP CHAHTE HO KI HAR BAAR JAB BHI UI UPDATE HO YA RENDER HO TAB CHALE THEN 
// useEffect(() => {
//   console.log("Every render");
// });
// ⚠️ Har render pe chalega
// ❌ Normally avoid karte hain 

// Case2 jab aap chahte ho ki kisi depenedecy mein chale useeffect matlab humra side stack wala kaam sirf ek baar chale then use khali dependenecy array

// Dependency	Kab chalega
// []	Sirf ek baar
// [state]	State change pe
// No array	Har render

// []:matlab sirf ek baar hi chalega 
// [anadar koi depeency then ]:usske har change ya render pe chalgea 
// no array :har baar render mein chalgea