var  pool = require('./connect_handler');
var mysql= require('mysql');
var path = require('path');

module.exports={
    createItem: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {
            if (err) console.log(err)
            var data = req.body;

            var sql = 'INSERT INTO `items`(name, description, completed) VALUES (?, ?, ?)';
            var inserts = [data.name, data.description, data.completed];
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {

                console.log('item created');
                res.send('item created');
                connection.release();
            });
        })
    }
}