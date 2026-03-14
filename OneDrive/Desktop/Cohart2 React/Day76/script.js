// localStorage:matlab agar humein chahiye ki user ka kuch data jaise uska thema ya login creaditials ko save kar sakein then it uses the localStorage 
// it has 5 to 10mb deoeending on the sytsem 

// SessionStorage:jaise hi browser band data bhi khatam 
localStorage.setItem("shri ji","dayalu");
localStorage.clear();
localStorage.setItem("shri ji","dayalu");
console.log(localStorage.getItem("shri ji"));
localStorage.removeItem("shri ji")
localStorage.setItem("lal ju","pyyare");

// DEKHO LOCALSTORAGE JO HAI WO CHEEZEIN STRING MEIN STORE KARTA HAI SAARE KEY PAIR 
// TOH AGAR AAP CHAHO TOH ARRAY OBJECT JO AAP STORE NAHI KAR SAKTE HAI 
// TOH 1:JSON.STRINGIFY---JO KI OBJECT/ARRAY KO STRING MEIN CONVERT KARTA HAI 
// AND 2:WAPAS SE STRING MEIN JO OBJECT CONVERTED THA USKO ORIGINAL OBJECT YA ARRAY MEIN CONVERT KARNE KE LIUE
// JSON.PARSE
let obj={
    name:"shri ji",
    age:18,
    city:"vrindavan"
}

localStorage.setItem("object",obj);
localStorage.setItem("objectcopy",JSON.stringify(obj))
let original=JSON.parse(localStorage.getItem("objectcopy"))
console.log(original.name);
