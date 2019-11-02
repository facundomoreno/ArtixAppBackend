const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/Publicar', function(req, res) {
    
    var nombreProducto = req.body.nombreProducto;
    var precio = req.body.precio;
    var estado = req.body.estado;
    var descProducto = req.body.descProducto;
    var categoria = req.body.categoria;
    var numero = req.body.numero;
    var piso = req.body.piso;
    var provincia = req.body.provincia;
    var ciudad = req.body.ciudad;
    var barrio = req.body.barrio;
    var imagen = req.body.imagen;

    var values = [nombreProducto, precio, estado, descProducto, categoria, numero, piso, provincia, ciudad, barrio, imagen];
    var sql =  "INSERT INTO productos (nombreprod, precio, estado, ds_producto, categoria, calle, numero, piso_dpto, provincia, ciudad, barrio, imagen) VALUES (?,?,?,?,?,?,?,?,?,?,?)"; 

    mysqlConnection.query(sql, values, function (err, rows, field) {

        if(!err){
            res.send({'success': true, 'message': 'Publicación hecha con éxito'}); 
        }

        if (row.length == 0 || row.length < 11) {
            res.send({ 'success': false, 'message': 'No se han ingresado datos' });
        }
        else{
            console.log(err);
            res.send({'success': false, 'message': 'Error'});
        }
    
    });

});

module.exports = router;