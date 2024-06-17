const pool = require('../DB.js');
async function createClient(name, email, phone1, hashedPassword, dressStyle, remarks){
  try{
      const sqlUser = `INSERT INTO users (userId, name, email, phone1, phone2, roleId) VALUES ( ?,?,?,?)`;
      const userResult = await pool.query(sqlUser, [userId, name,email, phone1, 3]);
      const insertId = userResult[0].insertId;
      const sqlPassword= `INSERT INTO passwords (userId, password) VALUES ( ?,?)`;
      const passwordResult = await pool.query(sqlPassword, [insertId,hashedPassword]);
      const sqlClient= `INSERT INTO clients (userId, dressStyle, remarks) VALUES ( ?,?,?)`;
      const clientResult = await pool.query(sqlClient, [insertId,dressStyle, remarks]);
      return userResult[0]; 
  }
  catch(err){
      throw err;
  }
}
async function getClients(){
    try{
        const sql='SELECT u.id, u.userId, name, email, phone1, phone2, weddingDate  FROM users u , clients c WHERE  u.id=c.userId and u.roleId=2';
        const result = await pool.query(sql);
        return result[0];
       }
    catch(err){
        throw err;
    }
  }
  
async function getClient(id){
  try{
    const sql='SELECT u.id, u.userId, name, email, phone1, phone2, weddingDate  FROM users u JOIN clients c ON u.id=c.userId WHERE u.id=?';
    const result = await pool.query(sql, [id]);
    return result[0];
}
catch(err){
    throw err;
}
}

async function updateClient(id, userId, name, email, phone1, phone2, hashedPassword,weddingDate){
  try{
      const sqlUser= 'UPDATE users SET userId=? name=? email=? phone1=? phone2=? WHERE id=?';
      const resultUser = await pool.query(sqlUser, [userId, name, email, phone1, phone2, id]);
      const sqlPassword= 'UPDATE passwords SET password=? WHERE userId=?';
      const resultPassword = await pool.query(sqlPassword, [hashedPassword, id]);
      const sqlClients= 'UPDATE clients SET weddingDate=? WHERE userId=?';
      const resultClient = await pool.query(sqlClients, [weddingDate, id]);
      return resultUser[0];
  }
  catch(err){
     throw err;
  }
}

// async function deleteClient(id){

//   try {
//     const sql1 = 'DELETE FROM passwords where userId=?';

//     const result1 = await pool.query(sql1, [id]);
    
//     const sql='DELETE FROM users WHERE id=?';
//       const result = await pool.query(sql, [id]);
//       return result[0];

//   } catch (err) {
//     throw err;
//   }
// }

module.exports = { createClient, getClients, getClient,updateClient }