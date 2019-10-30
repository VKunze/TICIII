var mysql = require('mysql');
//var script = require('./globalF.js');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "victoria15",
    database : "tic3"
});

//var connectdb = function(){
//    console.log("att");
    con.connect(function(err){
        if (err) throw err;
        console.log("Connected!");
        //script.db = con;
    });
//};

//global.database = con;
module.exports = {
    con : con
};

