var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: 'masterignite',
    database: 'Users_test',
    port: 3306
});
module.exports=pool;
