var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1997",
    database : "ticdb"
});

/* con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
}); */

module.exports = {
    db : db
};

