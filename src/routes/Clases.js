const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.get('/Usuarios', (req, res)=> {
    mysqlConnection.query("SELECT * FROM usuarios", (err, rows, field)=>{
        if(!err){
            res.json(rows); 
        }else{
            console.log(err);
        }
    });
});

module.exports = router;