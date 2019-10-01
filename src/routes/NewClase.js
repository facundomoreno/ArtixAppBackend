const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.post('/NewClase', (req, res)=> {

    var usuario = req.body.usuario;
    var dias_disp = req.body.dias_disp;
    var materia = req.body.materia;
    var tema = req.body.tema;
    var identibits = req.body.identibits;    

    mysqlConnection.query('INSERT INTO clases (materia, tema, dias_disp, usuario, identibits) VALUES (materia, tema, dias_disp, usuario, identibits)'), (err, rows, field)=>{
        if(!err){
            res.json({status: 'Clase registrada con exito'}); 
        }else{
            console.log(err);
        }
    };
});

module.exports = router;