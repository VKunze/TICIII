var mysql = require('mysql');

<<<<<<< HEAD
 var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1997",
    database : "ticdb"
}); 

/*var db = mysql.createConnection({
=======
/* var db = mysql.createConnection({
>>>>>>> parent of 2a15cd5... Merge branch 'master' of https://github.com/VKunze/TICIII
    host: "localhost",
    user: "root",
    password: "1997",
    database : "ticdb"
}); */

/* var db = mysql.createConnection({
    host: "localhost",
    user: "root",
<<<<<<< HEAD
    password: "30234155",
    database: "ticdb"
}); */
=======
    password: "victoria15",
    database : "usuarios"
});
>>>>>>> parent of 2a15cd5... Merge branch 'master' of https://github.com/VKunze/TICIII

db.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
})

function query1(sql){
    if(!sql) sql = "";
    return db.query(sql, function(err, result){
        if (err) throw err;
    })
}

module.exports = {
    db: db,
    query1: query1
};

