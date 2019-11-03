const {Router} = require('express');

const router = Router();
const multer = require('multer');







router.post('/Upload', (req, res)=>{

    /*const storage =  multer.diskStorage({
        destination: path.join(__dirname, 'public/images'),
        filename: (req, file, cb) =>{
            cb(null, file.originalname);
        }
    
    
    });
    
    
    router.use(multer({
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

    

    console.log(req.file);

    res.send('uploaded');


});

module.exports = router;