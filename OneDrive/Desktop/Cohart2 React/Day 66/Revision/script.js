// DESTRUCTURING OF ARRAY
let arr=[10,20,30,40]
// let arr2=arr;
console.log(arr);
// console.log(arr2);
// arr2.push(50);
// console.log(arr2);
console.log(arr);
// these means ki humara arrya ka copy nahi ban raha hai balki ek aur vairible same hi arrya ko refenbecve ya point out karnbe lage buss
// BEST METHOD TO COPY(SPREAD OPERATOR) 

let arr3=[...arr]
// OR
let [...arr4]=arr;

let [a,b,...c]=arr;
console.log(c);

// DESTRUCTURING OF OBJECT 
let obj={
    name:"aryan",
    city:"dto"
}
let obj2=obj;
obj2.city="vrindavan";
console.log(obj);
console.log(obj2);
let {name}=obj;
console.log(name);

let copy={...obj};
obj.name='radha ju';
console.log(obj);
console.log(copy);


// see for destructuring of array and object one improatnt thing when you destructure array you can use any variable to destructure but for object destructriuing you have to destructure with same key only

let {city}=obj;
// let {a}=obj; ERROR BECAUSE IT FINDS BY KEY IT CANNOT DESTRUCTYURE DIRECTLY 

// import export 
// USE:JAISE PAHLE HUM KYA KARTE THE KI EK HI FILE MEIN POORA JS LIKHTE HAI AB AGAR HUM CHAHE TOH KI EK FILE SE DUSRE FILE OF JS MEIN DATA BHE SAKEIN TOh

// export:jo file data send karti hai 
// import:jis file ko use karna hai wo import kartiu hai from the js file 

// Sabse pahle index file mein write the script type=module then src script.js 





