const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/PublicacionesUsuario', function(req, res, next) {
    
    var publicador = req.body.publicador;
    
    

    mysqlConnection.query(
        "SELECT * FROM productos WHERE publicador = ?",
        [publicador], function (err, rows, field) {

            if (err){
                console.log(err);
                res.send({ 'success': false, 'message': 'Could not connect to db' });
                
            }
            
            if (rows.length > 0) {

                if(publicador != ""){
                
               var string = JSON.stringify(rows);
               
               res.send({'success': true, 'productos': rows});
                }
               
                
            }

            else {
                res.send({ 'success': false, 'message': 'Usuario no encontrado' });
                
            }
        
    });

});

module.exports = router;