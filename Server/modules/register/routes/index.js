const db = require("../../../config/db");
const { body } = require('express-validator');
const controller = require("../controllers/index");
const router = require("express").Router();
const upload = require("../../../config/upload");

router.post(
  "/registerUser",
  upload.single("fileName"),
  [
  body('first_name').notEmpty().withMessage("First Name required"),  
  body('email').isEmail().withMessage("Invalid Email"),
  body('password')
        .exists({checkFalsy: true}).withMessage('You must type a password'),
    body('confirm_password')
        .exists({checkFalsy: true}).withMessage('You must type a confirmation password')
        .custom((value, {req}) => value === req.body.password).withMessage("The passwords do not match"),

   ],
  controller.registerUser
);

module.exports = router;
