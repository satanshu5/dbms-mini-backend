const mysql = require('mysql');
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'satanshu',
    database : 'automobiles',
});

module.exports = db;