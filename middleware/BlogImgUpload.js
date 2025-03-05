const multer = require("multer");

const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, 'profileimg/blogImg')
    },
    filename : function (req, file, cb){
        const fileName = Date.now() + "_" + Math.round(Math.random() * 1E9) + "_" + file.originalname ;
        cb(null, fileName)
    }
})
const upload = multer({storage});

module.exports = upload