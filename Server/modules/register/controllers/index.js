const userService = require("../service/index");
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {
    const errors =  validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()[0].msg
        });
    }
   else{
    res.status(200).json({
        success: true,
        message: 'Registration Successfull',
    })
   }
    try {
      console.log(req);
      const user = await userService.registerUser({
        ...req.body,
        fileName: req.file.filename,
      });
      if (user)
        return res.json({ status: true, message: "User added Successfully" });
    } catch (err) {}
  
  return res.json({ status: false, message: "Failed to add user!" });
};
