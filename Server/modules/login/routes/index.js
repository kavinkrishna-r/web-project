const db = require("../../../config/db");
const router = require("express").Router();
const controller = require("../controllers/index")

router.post("/loginUser", controller.loginUser);

module.exports = router;
