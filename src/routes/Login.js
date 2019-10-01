const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/Login', function(req, res, next) {
    
    var username = req.body.username;
    var password = req.body.password;

    mysqlConnection.query(
        "SELECT * FROM usuarios WHERE usuario = ? AND pass = ?",
        [username, password], function (err, row, field) {

            if (err){
                console.log(err);
                res.send({ 'success': false, 'message': 'Could not connect to db' });
            }
            
            if (row.length > 0) {
                res.send({ 'success': true, 'usuario': row[0].username });
            }

            else {
                res.send({ 'success': false, 'message': 'Usuario no encontrado' });
            }
        
    });

});

module.exports = router;