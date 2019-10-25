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
});

global.database = con;

function query1(sql){
    if(!sql) sql = "SELECT * FROM Barrio;";
    return database.query(sql, function(err, result){
        if (err) throw err;
        //console.log("Result: " + result);
    });
}


module.exports.query1 = query1;
module.exports.database = con;

