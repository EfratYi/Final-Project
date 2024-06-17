const pool = require('../DB.js');
// const sql=`SELECT o.id, u.userId, name, email, phone1, phone2, weddingDate, model, repairs,type
// FROM orders o, users u, clients c,dresses d, accessories a1, accessoriesInOrder a2
//  WHERE o.clientId=c.id and c.userId=u.id and o.dressId=d.id
//  GROUP BY o.id `;
async function getOrders() {
    try {

        const sql = `
         SELECT o.id, u.name, d.model, c.weddingDate,  o.returnDate
            FROM orders o
            JOIN clients c ON o.clientId = c.id
            JOIN users u ON c.userId = u.id
            JOIN dresses d ON o.dressId = d.id;
    `
        const result = await pool.query(sql);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function getOrder(id) {
    try {
        const sql = `
            SELECT 
                o.id, u.userId, u.name, u.phone1, u.phone2, u.email, c.weddingDate, o.returnDate, d.model, o.repairs, 
                GROUP_CONCAT(a.type SEPARATOR ', ') AS accessories
            FROM orders o JOIN clients c ON o.clientId = c.id
            JOIN users u ON c.userId = u.id
            JOIN dresses d ON o.dressId = d.id
            LEFT JOIN accessoriesInOrder aio ON o.id = aio.orderId
            LEFT JOIN accessories a ON aio.accessoryId = a.id
            WHERE o.id = ?`;
        const result = await pool.query(sql, [id]);
        return result[0];
    } catch (err) {
        throw err;
    }
}

async function createOrder(date, returnDate, clientId, dressId, repairs, paidInAdvance, accessoriesId) {
    try {
        if (accessoriesId) {
            for (let i = 0; i < accessoriesId.length; i++) {
                const sqlAccessories = 'INSERT INTO accessoriesInOrder (orderId, accessoryId) VALUES (?,?)';
                const resultAccessories = await pool.query(sqlAccessories, [orderId, accessoriesId[i]]);
            }
        }
        const sql = 'INSERT INTO orders (date, returnDate, clientId, dressId, repairs, paidInAdvance) VALUES (?,?,?,?,?,?)';
        const result = await pool.query(sql, [date, returnDate, clientId, dressId, repairs, paidInAdvance]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function updateOrder(id, date, returnDate, clientId, dressId, repairs, paidInAdvance, accessoriesId) {
    try {
        const sqlDeleteAccessories = `DELETE FROM accessoriesInOrder WHERE orderId=?`
        const resultDeleteAccessories = await pool.query(sqlDeleteAccessories, [id]);
        if (accessoriesId) {
            for (let i = 0; i < accessoriesId.length; i++) {
                const sqlInsertAccessories = 'INSERT INTO accessoriesInOrder (orderId, accessoryId) VALUES (?,?)';
                const resultInsertAccessories = await pool.query(sqlInsertAccessories, [orderId, accessoriesId[i]]);
            }
        }
        const sql = 'UPDATE orders SET  date=? returnDate=? clientId=? dressId=? repairs=? paidInAdvance=? WHERE id=?';
        const result = await pool.query(sql, [date, returnDate, clientId, dressId, repairs, paidInAdvance, id]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function deleteOrder(id) {
    try {
        const sqlDeleteAccessories = `DELETE FROM accessoriesInOrder WHERE orderId=?`
        const resultDeleteAccessories = await pool.query(sqlDeleteAccessories, [id]);
        const sql = 'DELETE FROM orders WHERE id=?';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}
module.exports = { createOrder, getOrders, getOrder, updateOrder, deleteOrder }