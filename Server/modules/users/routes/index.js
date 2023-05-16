const controller = require("../controllers/index");
const router = require("express").Router();
const upload = require("../../../config/upload")

router.get("/showUsers", controller.getAllUsers);
router.post("/addUser", upload.single("filename"), controller.addUser);

module.exports = router;
