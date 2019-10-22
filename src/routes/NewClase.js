const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/NewClase', function (req, res) {

    var usuario = req.body.usuario;
    var dias_disp = req.body.dias_disp;
    var materia = req.body.materia;
    var tema = req.body.tema;
    var identibits = req.body.identibits;    

    var sql = "INSERT INTO clases (materia, tema, dias_disp, usuario, identibits) VALUES (?,?,?,?,?)";
    var values = [materia, tema, dias_disp, usuario, identibits];
    //console.log(values);

    mysqlConnection.query(sql, values, function (err, rows, field) {
        if(!err){
            res.json(rows + {status: 'Clase registrada con exito'}); 
        }else{
            console.log(err);
        }
    });
});

module.exports = router;