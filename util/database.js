// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host:'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Nikhil@1107'
// })

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Nikhil@1107',{
    dialect: 'mysql',
    host:'localhost'
});

module.exports = sequelize;