var mysql = require('mysql');

 var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1997",
    database : "ticdb"
}); 

/*var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "victoria15",
    database: "usuarios"
});*/

/* var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "30234155",
    database: "ticdb"
}); */

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
})

function query1(sql) {
    if (!sql) sql = "";
    return db.query(sql, function(err, result) {
        if (err) throw err;
    })
}

module.exports = {
    db: db,
    query1: query1
};