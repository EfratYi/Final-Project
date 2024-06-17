const pool = require('../DB.js');
//בנפרד ללקוח ועובד
async function createUser() {
  try {
    const sqlUser = `INSERT INTO users (userId, name, email, phone1, phone2, roleId) VALUES ( ?,?,?,?,?)`;
    const userResult = await pool.query(sqlUser, [userId, name, email, phone1, phone2, 3]);
    const insertId = userResult[0].insertId;
    const sqlPassword = `INSERT INTO passwords (userId, password) VALUES ( ?,?)`;
    const result = await pool.query(sqlPassword, [insertId, hashedPassword]);
    return result[0];
  }
  catch (err) {
    throw err;
  }
}

async function getUsers() {
  try {
    const sql = 'SELECT u.id, userId, name, email, phone1, phone2, type role FROM users u, roles r WHERE u.roleId=r.id';
    const result = await pool.query(sql);
    return result[0];
  }
  catch (err) {
    throw err;
  }
}
async function loginModel(email) {
  try {
    const sql = 'SELECT users.id, users.email, passwords.password FROM users JOIN passwords ON users.id = passwords.userId WHERE users.email = ?';
    const [result] = await pool.query(sql, [email]);
    return result.length > 0 ? result[0] : null;
  } catch (err) {
    throw err;
  }
}
async function registerModelGET(username) {
  try {
    const sql = 'SELECT * FROM users where ?';
    const [rows, fields] = await pool.query(sql, [username]);
    return rows;
  }
  catch (err) {
    console.log(err);
  }
}
async function getUser(id) {
  //לעשות גם לקוח וגם עובד
  try {
    console.log(id)
    const sql = 'SELECT u.id, userId, name, email, phone1, phone2, type role FROM users u JOIN roles r ON u.roleId=r.id WHERE u.id=?';
    const [result] = await pool.query(sql, [id]);
    console.log(JSON.stringify(result[0])+'gggg');
    return result.length > 0 ? JSON.stringify(result[0]) : null;
  }
  catch (err) {
    throw err;
  }
}
// בנפרד ללקוח ועובד
async function updateUser(id, userId, name, email, phone1, phone2, hashedPassword) {
  try {
    const sqlUser = 'UPDATE users SET userId=? name=? email=? phone1=? phone2=? WHERE id=?';
    const sqlPassword = 'UPDATE passwords SET password=? WHERE userId=?';
    const resultUser = await pool.query(sqlUser, [userId, name, email, phone1, phone2, id]);
    const resultPassword = await pool.query(sqlPassword, [hashedPassword, id]);
    return resultUser[0];
  }
  catch (err) {
    throw err;
  }
}

async function deleteUser(id) {
  try {
    const sql1 = 'DELETE  FROM passwords where userId=?';
    const result1 = await pool.query(sql1, [id]);
    const sql = 'DELETE FROM users WHERE id=?';
    const result = await pool.query(sql, [id]);
    return result[0];
  } catch (err) {
    throw err;
  }
}

module.exports = { createUser, getUsers, getUser, registerModelGET, updateUser, deleteUser, loginModel }