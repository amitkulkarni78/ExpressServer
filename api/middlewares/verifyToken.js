const jwt = require("javascript-web-token"); 
module.exports = {
    verify = (req,res,next)=>{
        if(req.headers.authorization){
            console.log(req.headers.authorization);
             // todo : add the token verification code 
        }
    }
}