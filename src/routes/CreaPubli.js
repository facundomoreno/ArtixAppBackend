const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/Publicar', function(req, res) {
    
    var nombreProducto = req.body.nombreProducto;
    var precio = req.body.precio;
    var estado = req.body.estado;
    var descProducto = req.body.descProducto;
    var categoria = req.body.categoria;   
    var imagen = req.body.imagen;
	var stock = req.body.stock;
    var count = req.body.count;
    var publicador = req.body.publicador;

    var values = [nombreProducto, estado, descProducto, categoria, imagen, precio, stock, count, publicador];
    var sql =  "INSERT INTO productos (nombreprod, estado, ds_producto, categoria, imagen, precio, stock, count, publicador) VALUES (?,?,?,?,?,?,?,?,?)"; 



    mysqlConnection.query(sql, values, function (err, rows, field) {

        if(!err){
            res.send({'success': true, 'message': 'Publicación hecha con éxito'}); 
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