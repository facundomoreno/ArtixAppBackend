const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/Comprar', function(req, res) {
    
    var id_producto = req.body.id_producto;
    var id_usuario = req.body.id_usuario;
    

    var values = [id_usuario, id_producto];
    var sql =  "INSERT INTO compras (id_usuario, id_producto) VALUES (?,?)"; 



    mysqlConnection.query(sql, values, function (err, rows, field) {

        if(!err){
            res.send({'success': true, 'message': 'Compra realizada con éxito'}); 
        }

        /*if (row.length == 0 || row.length < 11) {
            res.send({ 'success': false, 'message': 'No se han ingresado datos' });
        }*/
        else{
            console.log(err);
            res.send({'success': false, 'message': 'Error'});
        }
    
    });

});

module.exports = router;