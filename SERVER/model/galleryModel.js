const pool = require('../DB.js');

async function createPhoto(imageUrl) {
    try {
        const sql = `INSERT INTO gallery (imageUrl) VALUES (?)`;
        const result = await pool.query(sql, [imageUrl]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function getGallry() {
    try {
        const sql = 'SELECT * FROM gallery';
        const result = await pool.query(sql);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

async function deletePhoto(id) {
    try {
        const sql = 'DELETE FROM gallery WHERE id=?';
        const result = await pool.query(sql, [id]);
        return result[0];
    }
    catch (err) {
        throw err;
    }
}

module.exports = { createPhoto, getGallry, deletePhoto}