const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/Register', function(req, res) {
    
    var username = req.body.username;
    var password = req.body.password;
    var mail = req.body.mail;

    var values = [username, password, mail];
    var sql =  "INSERT INTO usuarios (nombre_apellido, password, email) VALUES (?,?,?)"; 

    mysqlConnection.query(sql, values, function (err, rows, field) {

        if(!err){
            res.json(rows + {status: 'Usuario registrado con éxito'}); 
        }else{
            console.log(err);
        }
    
    });

});

module.exports = router;