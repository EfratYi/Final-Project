const pool = require('../DB.js');

async function createAccessory(type) {
    try {
        const sql = `INSERT INTO accessories (type) VALUES (?)`;
        const result = await pool.query(sql, [type]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function getAccessories() {
    try {
        const sql = 'SELECT * FROM accessories';
        const result = await pool.query(sql);
        console.log(result)
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function getAccessory(id) {
    try {
        const sql = 'SELECT * FROM accessories WHERE id=?';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function getAccessoriesOfOrder(orderId) {
    try {
        const sql = 'SELECT type FROM accessories a1, accessoriesInOrder a2 WHERE a2.accessoryId=a1.id and  a2.orderId=?';
        const result = await pool.query(sql, [orderId]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function updateAccessory(id, type) {
    try {
        const sql = 'UPDATE accessories SET  type=? WHERE id=?';
        const result = await pool.query(sql, [type, id]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function deleteAccessory(id) {
    try {
        const sql = 'DELETE FROM accessories WHERE id=?';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

module.exports = { getAccessories, getAccessory, updateAccessory, deleteAccessory, createAccessory, getAccessoriesOfOrder }