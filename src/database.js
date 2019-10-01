const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'maximus1402',
    database: 'users'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log('Db Conected');
    }
});

module.exports = mysqlConnection;