// ContextApi ka use:taaki data ko share kar paaye globally to all the components and props drilling se back sakein 
// dekho sabse pahle tum seekho jaake ek parent component data mein children ko pass karna hai and wo child jo receive kar raha hai wo kaise use karega 
// ye cheez directl dekh lo issi mein vite-project mein kaise appne navbar ko call karte waqt sirf props hi nahi bheja balki children bhi bheja and jab navbar usko receive karega then he can use the props and children both 

// sabse pahle kaam ye hai ki sab log app mein hi rahte hai beacuse main.jsx render app.jsx ko hi karta hai 
// toh sabse pahle jaise react router mein hum Browser router ki help se wrap karte hai apne app.jsx ko main.jsx file mein waise hi 
//  ab create context ka main file se usko wrap karenge jis bhi file mein createcontext banega and data share hoga

// sabse pahle create context folder in src