const pool = require('../DB.js');

async function createDisabledQueuas(date,hour) {
    try {
        const sql = `INSERT INTO disabledQueuas (date,hour) VALUES (?,?)`;
        const result = await pool.query(sql, [date,hour]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function getDisabledQueuas() {
    try {
        const sql = 'SELECT * FROM disabledQueuas';
        const result = await pool.query(sql);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}


async function deleteDisabledQueuas(id) {
    try {
        const sql = 'DELETE FROM disabledQueuas WHERE id=?';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

module.exports = { createDisabledQueuas, getDisabledQueuas, deleteDisabledQueuas}