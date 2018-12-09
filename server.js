const app = require("./app");


var PORT = process.env.PORT || 3000;
var path = "./config/env/"+process.env.NODE_ENV+".env";
//console.log(path);
dotenv = require("dotenv").config({path: path});
global.secretCode = dotenv.parsed.SECRET;
//console.log("environment :",process.env.NODE_ENV);
//console.log("PORT :",process.env.PORT);

console.log(dotenv.parsed);

const server = app.listen(PORT,()=>{
    console.log("server running on port",PORT);
})