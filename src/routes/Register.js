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
            res.send({'success': true, 'message': 'Usuario registrado con éxito'}); 
        }

        if (row.length == 0) {
            res.send({ 'success': false, 'message': 'No se han ingresado datos' });
        }
        /*
        if(mail == "SELECT email FROM usuarios WHERE email = ?"){
            res.send({'success': false, 'message': 'Ya existe un usuario con este mail'});
        }
        */
        else{
            console.log(err);
            res.send({'success': false, 'message': 'Error'});
        }
    
    });

});

module.exports = router;