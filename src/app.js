const express = require('express');
const path = require('path');
const app = express();
const multer = require('multer');

/*const storage =  multer.diskStorage({
    destination: path.join(__dirname, 'public/images'),
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }


});
*/


//settings
app.set('port', process.env.PORT || 3000);





//middlewares
/*app.use(multer({
    storage,
    dest: path.join(__dirname, 'public/images'),
    limits: {fileSize: 2000000},
    fileFilter: (req, file, cb)=> {

        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true);
        }
        cb("error: archivo debe ser una imagen");
    }

}).single('image'));
*/

app.use(express.json());

//routes

app.use(require('./routes/Login'));
app.use(require('./routes/Clases'));
app.use(require('./routes/NewClase'));
app.use(require('./routes/Register'));
app.use(require('./routes/Map'));
app.use(require('./routes/Productos'));
app.use(require('./routes/Imagenes'));
app.use(require('./routes/CreaPubli'));


//starting server
app.listen(app.get('port'), ()=>{
    console.log('servidor en el puerto', app.get('port'));    

}); 