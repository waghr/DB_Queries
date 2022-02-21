const mysql =  require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rohit',
    database: 'employee'
});

connection.connect((err) =>{
    if(err) throw err;
    console.log("connected");
   /*var sql = "INSERT INTO employee_table (id,name, address,phone_num) VALUES ?";
   var values = [['1','John', 'Highway 71','961631'],
   ['2','Peter', 'Lowstreet 4','984613'],
   ['3','Amy', 'Apple st 652','789456'],
   ['4','Hannah', 'Mountain 21','123456'],
   ['5','Michael', 'Valley 345','0123456'],
   ['6','Sandy', 'Ocean blvd 2','74859612']];

    var sql = "DELETE FROM employee_table WHERE address = 'kalwan'";

    connection.query(sql,[values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });*/
});

module.exports=connection;