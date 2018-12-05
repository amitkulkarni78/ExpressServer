const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./api/routes/userRoutes");
const bookRoutes = require("./api/routes/bookRoutes");
const routes = require("./api/routes/routes");
//const router = express.Router();
app.use(bodyParser.json());


app.get("/",(req,res,next)=>{
    console.log("welcome route");
    res.send("welcome route");
})

app.get("/error",(req,res,next)=>{
    res.send("welcome to error route");
})


app.use('/api',userRoutes);
app.use('/api',bookRoutes);
module.exports = app;
