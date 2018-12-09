const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken"); 
const routes = require("./api/routes/routes");
const Token = require("./api/middlewares/verifyToken");
var path = "./config/env/"+process.env.NODE_ENV+".env";
//console.log(path);
dotenv = require("dotenv").config({path: path});

//const router = express.Router();
app.use('*',bodyParser.json());
app.use('/api',Token.verify);

app.get("/",(req,res,next)=>{
   
    console.log("welcome route");
    res.json({ message: "welcome route"});
})

app.get("/token",(req,res,next)=>{
    var token = jwt.sign({foo : "bar"},dotenv.parsed.SECRET,{expiresIn: 15});
    res.send({
        token:token
    });
})

app.get("/error",(req,res,next)=>{
    res.send("welcome to error route");
})


app.use('/api',routes.routes);
//app.use('/api',bookRoutes);

module.exports = app;
