const db = require("../../../config/db");
const { body, validationResult } = require('express-validator');
const controller = require("../controllers/index");
const router = require("express").Router();
const upload = require("../../../config/upload");

router.post(
  "/registerUser",
  body('email').isEmail().withMessage("Invalid Email"),
  body('password').isLength({
      min: 6
  }).withMessage("minimum 6 Characters"),

  upload.single("fileName"),
  controller.registerUser
);

module.exports = router;
