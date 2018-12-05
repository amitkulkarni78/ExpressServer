const usermodule = require("../modules/userModule");
module.exports = {  
    getUsers : (req,res,next)=>{
        usermodule.getAllUsers().then((result)=>{
            if(result){
                console.log("result received in controller : ",result);
                res.send({
                    data: result,
                    message : "got all users",
                    status: true
                });
            }else{
                console.log("result not received in controller : ");
                res.send({
                    
                    message : "error getting all users",
                    status: true
                });
            }

           
        }).catch((error)=>{
            res.send({
                error: error,
                message : "got all users",
                status: true
            });
        })
        
    },

    addUser : (req,res,next)=>{
        res.send({
            message: "add uesr"
        })
    }
}
