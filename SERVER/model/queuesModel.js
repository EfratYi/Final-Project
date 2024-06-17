const pool = require('../DB.js');
async function creatQueue( date, hour, minutes, userId, typeId){
    try {
        const rowsQueue = `INSERT INTO queues ( date, hour, minutes, userId, typeId) VALUES ( ?,?,?,?,?)`;
        const Result = await pool.query(rowsQueue, [ date, hour, minutes, userId, typeId]);
        return Result[0]; 
       } 
      catch (err){
        throw err;
      }
 }

async function getQueues(){
    try{
        const sql=' SELECT date, hour, minutes, name, type, dressStyle FROM queues q1, users u, queueTypes q2, clients c WHERE u.id=q1.userId and q2.id=q1.typeId and c.userId=u.id';
        const result = await pool.query(sql);
        return result[0];
    }
    catch(err){
        throw err;
    }
 }
 async function getQueuesOfClient(userId){
    try{
        const sql=' SELECT date, hour, minutes, name, type, dressStyle FROM queues q1, users u, queueTypes q2, clients c WHERE u.id=q1.userId and q2.id=q1.typeId and c.userId=u.id and c.userId=id';
        const result = await pool.query(sql,[userId]);
        return result[0];
    }
    catch(err){
        throw err;
    }
 }

 async function getQueue(id){
    try{
        const sql='SELECT date, hour, minutes, u.userId, name, phone1, phone2, email, weddingDate, type FROM queues q1, users u, clients c, queueTypes q2 WHERE q1.id=? and u.id=q1.userId and q2.id=q1.typeId and c.userId=u.id';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch(err){
        throw err;
    }
 }
 
 async function updateQueue(id, date, hour, minutes, userId, typeId){
    try{
        const sql= 'UPDATE queues SET date=? hour=? minutes=? userId=? typeId=? WHERE id=?';
        const result = await pool.query(sql, [ date, hour, minutes, userId, typeId, id]);
        return result[0];
    }
    catch(err){
       throw err;
    }
 }

 async function deleteQueue(id){
    try{
        const sql='DELETE FROM queues WHERE id=?';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch(err){
        throw err;
    }
 }

 module.exports ={getQueues,getQueue, getQueuesOfClient,updateQueue,deleteQueue,creatQueue}