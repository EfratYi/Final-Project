
const pool = require('../DB.js');


async function getDresses(){
    try{
        const sql='SELECT * FROM dresses';
        const result = await pool.query(sql);
        return result[0];
    }
    catch(err){
        throw err;
    }
 }

 async function getDress(id){
    try{
        const sql='SELECT * FROM dresses WHERE id=?';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch(err){
        throw err;
    }
 }

 
 async function updateDress(id, model, price, uses, advancePayment) {
    try {
        const sql = 'UPDATE dresses SET model=?, price=?, uses=?, advancePayment=? WHERE id=?';
        const result = await pool.query(sql, [model, price, uses, advancePayment, id]);
        return result[0];
    } catch (err) {
        throw err;
    }
}

 
 async function deleteDress(id){
    try{
        const sql='DELETE FROM dresses WHERE id=?';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch(err){
        throw err;
    }
 }

 async function createDress(model, price, uses, advancePayment) {
    try {
        const sql = `INSERT INTO dresses (model, price, uses, advancePayment) VALUES (?,?,?,?)`;
        const result = await pool.query(sql, [model, price, uses, advancePayment]);
        return result[0];
    } catch (err) {
        throw err;
    }
}

module.exports = { getDresses, getDress, updateDress, deleteDress, createDress };