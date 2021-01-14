var express = require('express');
var app = new express();
var fs = require('fs');

// 解决跨域问题
app.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    // res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
});

var MysqlConnection = require('./mysqlConnection');
var mysqlConn = new MysqlConnection();

app.get('/',function (req,res) {
    //返回网页
    fs.readFile(__dirname + "/index.html",function (err,data) {
        res.end(data);
    })
})

app.get('/listUsers',function (req,res) {
    //返回列表
    mysqlConn.searchFunc("",
        function (results) {
            res.end(JSON.stringify(results));
        },
        function (error) {
            res.end(JSON.stringify(error));
        }
    );
});

app.get('/addUser',function (req,res) {
    //添加新用户数据
    mysqlConn.addFunc("",
        function (results) {
            res.end(JSON.stringify(results));
        },
        function (error) {
            res.end(JSON.stringify(error));
        }
    );
});

app.get('/deleteUser',function (req,res) {
    mysqlConn.deleteFunc("",
        function (results) {
            res.end(JSON.stringify(results));
        },
        function (error) {
            res.end(JSON.stringify(error));
        }
    );
    // var id = 2;
    // fs.readFile(__dirname +"/" + 'users.json','utf8',function (err,data) {
    //     console.log(data);
    //     data = JSON.parse(data);
    //     delete data["user" + id];
    //     console.log(data);
    //     res.end(JSON.stringify(data));
    // })
    
});

app.get('/:id',function (req,res) {
    
})

var app = app.listen(process.env.PORT || 6789,function () {
    var host = app.address().address;
    var port = app.address().port;
    console.log("应用实例，访问地址为http://%s:%s",host,port);
})