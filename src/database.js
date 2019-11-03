const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'rootroot',
    database: 'artix'
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