const jwt = require("jsonwebtoken"); 

exports = module.exports = {
    verify : (req,res,next)=>{
        if(req.headers.authorization){
            console.log(req.headers);
            var path = "./config/env/"+process.env.NODE_ENV+".env";
            dotenv = require("dotenv").config({path: path});
            console.log(dotenv);
             // todo : add the token verification code
            var temp = req.headers.authorization;
            temp = temp.split(' ');
            console.log(temp[1]);
            try {
                var decoded = jwt.verify(temp[1],dotenv.parsed.SECRET);
                console.log(decoded); 
                next();
            } catch (error) {
                res.send({
                    message: "Unauthorized",
                    status: false
                });                
            }
           
        }else{
            console.log(req.headers);
            res.statuCode= 403;
            res.send({
                status:403,
                message: "Unauthorized route"
            });
        }
    },

   
}