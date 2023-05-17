const multer = require("multer");

// img storage confing
var imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log("11111",req.body);
    callback(null, "./uploads");

  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

var upload = multer({
  storage: imgconfig,
});

module.exports = upload