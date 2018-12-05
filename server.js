const app = require("./app");
 const dotenv = require("dotenv").config({path: "./config/env/"+process.env.ENV});


console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
console.log(process.env.ENV);
console.log(dotenv.parsed);



const server = app.listen(process.env.PORT,()=>{
    console.log("server running on port",process.env.PORT);
})