
const mysql = require('mysql');
const conn = mysql.createPool({
    connectionLimit:10 ,
    connectTimeout : 3000,
    host: 'localhost',
    user: 'node',
    port: 8889,
    database : 'sampledb',
    password: 'node'
});

module.exports = {
    getAllUsers : ()=>{
        return new Promise((resolve,reject)=>{
            var sql = "SELECT * FROM users"; 
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