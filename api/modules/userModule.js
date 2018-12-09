
const mysql = require('mysql');

const conn = mysql.createPool({
    connectionLimit:10 ,
    connectTimeout : 3000,
    host: 'localhost',
    user: 'root',
    port: 3306,
    database : 'expressdemo',
    password: ''
});

module.exports = {
    getAllUsers : ()=>{
        return new Promise((resolve,reject)=>{
            var sql = "SELECT * FROM user"; 
            conn.getConnection((error,connection)=>{
                if(error){
                    console.log(error);
                    reject(error);
                }else{
                    connection.query(sql,(err,result,fields)=>{
                        connection.release();
                        if(err){
                            reject(err);
                        }else{
                            resolve(result);
                        }
                    })
                }
            })
        })
    }
}