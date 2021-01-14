var mysql = require("mysql");

function MysqlConnection() {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "123456",
        port: '3306',
        database: "test"
    });

    //查询
    this.searchFunc = function (tableName,sucCallback,errCallback) {

        connection.connect();
        var sql = 'select * from websites';
        connection.query(sql, function (error, results) {
            if (error) {
                errCallback(error);
                return;
            }
            sucCallback(results);
        })
        //关闭连接
        connection.end();
    }

    //增加
    this.addFunc = function (tableName,sucCallback,errCallback) {
        connection.connect();

        var addSql = 'insert into websites(id,name,url,alexa,country) values(0,?,?,?,?)';
        var addSqlParams = ['菜鸟工具', 'https://c.runoob.com', '23453', 'CN'];
        connection.query(addSql, addSqlParams, function (err, result) {
            if (error) {
                errCallback(error);
                return;
            }
            sucCallback(results);
        })
        //关闭连接
        connection.end();
    }

    //删除
    this.deleteFunc = function (tableName,sucCallback,errCallback) {
        connection.connect();

        var delSql = 'delete from websites where id = 6';
        connection.query(delSql, function (err, result) {
            if (error) {
                errCallback(error);
                return;
            }
            sucCallback(results);
        })
        //关闭连接
        connection.end();
    }

    //修改
    this.updateFunc = function (tableName,sucCallback,errCallback) {
        connection.connect();

        var modSql = 'update websites set name = ?,url = ? where id = ?';
        var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com', 6];
        connection.query(modSql, modSqlParams, function (err, result) {
            if (error) {
                errCallback(error);
                return;
            }
            sucCallback(results);
        })
        //关闭连接
        connection.end();
    }
}

module.exports = MysqlConnection;













