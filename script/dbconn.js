var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "victoria15",
    database : "tic3"
});

/* con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
}); */

module.exports = {
    db : db
};

