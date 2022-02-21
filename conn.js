const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const mysql =  require('mysql');
const connection = require('./database');


app.use(express.json());


app.get("/",(req, res)=>{
    connection.query('select * from employee_table', (err,rows) => {
    if (err) throw err;
    res.send(rows);
    });
});

app.post('/add_data',function (req, res) {
        var postData = req.body;
        connection.query('insert into employee_table SET ?', postData, function (err, result, fields) {
            if (err)
                throw err;
            res.end(JSON.stringify(result));
        });
    });

app.put('/update_data',function (req, res) {
        connection.query('update employee_table SET id=2,name=?,address=?,phone_num=?',[ req.body.name, req.body.address, 
            req.body.phone_num], function (err, result, fields) {
            if (err)
                throw err;
            res.end(JSON.stringify(result));
        });
    });

app.delete('/delete_data/:id',function (req, res) {
        connection.query('delete from employee_table where id=?',[req.params.id], function (err, result, fields) {
            if (err)
                throw err;
            res.end('record deleted');
        });
    });
/*app.get('/',(req, res)=>{
    resp.send('Welcome to study REST api with nie js')
});*/

app.listen(3000)