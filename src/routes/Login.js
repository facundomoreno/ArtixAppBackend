const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/Login', function(req, res, next) {
    
    var mail = req.body.mail;
    var password = req.body.password; 
    

    mysqlConnection.query(
        "SELECT * FROM usuarios WHERE email = ? AND password = ?",
        [mail, password], function (err, row, field) {

            if (err){
                console.log(err);
                res.send({ 'success': false, 'message': 'Could not connect to db' });
            }
            
            if (row.length > 0) {
                
               var string = JSON.stringify(row);
               
               
              res.send({ 'success': true, 'usuario': row[0].nombre_apellido, 'idusuario' : row[0].id_usuario});
               
                
            }

            else {
                res.send({ 'success': false, 'message': 'Usuario no encontrado' });
            }
        
    });

});

module.exports = router;