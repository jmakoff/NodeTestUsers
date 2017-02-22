var  pool = require('./connect_handler');
var mysql= require('mysql');
var path = require('path');

module.exports={
    loadItems: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {

            if (err) console.log(err)

            connection.query('SELECT * FROM `users`', function (err, rows) {
                res.json(rows);
                connection.release();
            });
        });

    },
    createItem: function (req, res) {

        // подключение к бд
        pool.getConnection(function (err, connection) {
            if (err) console.log(err)
            var data = req.body;
            console.log(data.password)
            console.log(data.userName)

            var sql = 'INSERT INTO `users`(User_name, password) VALUES (?, ?)';
           /* var inserts = ["Test Item", "Test Description"];*/
            var inserts = [data.userName, data.password];
            sql = mysql.format(sql, inserts);

            connection.query(sql, function (err, rows) {
                res.send('item updated');

                console.log('item created');

                connection.release();
            });
        })
    }
}