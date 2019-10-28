var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1997",
    database : "ticdb"
});

//var connectdb = function(){
//    console.log("att");
    con.connect(function(err){
        if (err) throw err;
        console.log("Connected!");
    });
//};

//global.database = con;
module.exports = {
    con : con
};

