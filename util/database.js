const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Nikhil@1107'
})

module.exports = pool.promise();