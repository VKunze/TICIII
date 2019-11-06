var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "victoria15",
    database : "tic3"
});

var db1 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "victoria15",
    database : "usuarios"
});

/* con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
}); */

module.exports = {
    db : db
};
module.exports = {
    db1 : db1
};
