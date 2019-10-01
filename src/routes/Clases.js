const express = require('express');
const router = express.Router(); 

const mysqlConnection = require('../database')

router.get('/Clases', (req, res)=> {
    mysqlConnection.query('SELECT * FROM clases', (err, rows, field)=>{
        if(!err){
            res.json(rows); 
        }else{
            console.log(err);
        }
    });
});

module.exports = router;