var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1997",
    database : "ticdb"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    var sql = "SELECT * FROM Barrio;";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("Result: " + result);
    });
});
global.database=con;