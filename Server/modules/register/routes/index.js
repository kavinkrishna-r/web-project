const db = require("../../../config/db");

const controller = require("../controllers/index");
const router = require("express").Router();
const upload = require("../../../config/upload")


router.post("/registerUser", upload.single("filename"), controller.registerUser);

module.exports = router;
