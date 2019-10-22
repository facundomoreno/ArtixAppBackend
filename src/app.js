const express = require('express');
const app = express();


//settings
app.set('port', process.env.PORT || 3000);





//middlewares

app.use(express.json());

//routes

app.use(require('./routes/Login'));
app.use(require('./routes/Clases'));
app.use(require('./routes/NewClase'));
app.use(require('./routes/Register'));


//starting server
app.listen(app.get('port'), ()=>{
    console.log('servidor en el puerto', app.get('port'));    

}); 