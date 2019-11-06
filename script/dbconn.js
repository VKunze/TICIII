var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1997",
    database : "ticdb"
});

var db1 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "victoria15",
    database : "usuarios"
});

db.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
})
db1.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
})

module.exports = {
    db: db,
    db1:db1
};

