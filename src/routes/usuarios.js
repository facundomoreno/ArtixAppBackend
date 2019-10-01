const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

/*router.get('/', (req, res)=> {
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, field)=>{
        if(!err){
            res.json(rows); 
        }else{
            console.log(err);
        }
    });
});
*/

/*
router.get('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('SELECT * FROM usuarios WHERE id = ?', [id],(err, rows, field)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});


router.post('/', (req, res)=>{
    const {id, name, mail} = req.body;
    const query = 'CALL usuarioAddOrEdit(?, ?, ?);'; 
    
    mysqlConnection.query(query, [id, name, mail], (err, rows, fields)=> {
        if(!err){
            res.json({status: 'Usuario registrado con exito'});

        }else{
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
     const {name, mail} = req.body;
     const {id} = req.params;
     const query ='CALL usuarioAddOrEdit(?,?,?)';
     mysqlConnection.query(query, [id, name, mail], (err, rows, fields)=> {
         if(!err){
             res.json({status: 'Usuario editado con exito!'});
         }else{
             console.log(err);
         }
     })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM usuarios WHERE id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json({status: 'Usuario eliminado con exito'})
        }
        else{
            console.log(err);
        }
    });
});

module.exports = router;
*/
