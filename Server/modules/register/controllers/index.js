const userService = require("../service/index");
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res) => {
    const errors =  validationResult(req);
   try{ 
    if (!errors.isEmpty()) {
        return res.json({
            status: false,
            message: errors.array()[0].msg
        });
    }
   else{
    // res.status(200).json({
    //     success: true,
    //     message: 'Registration Successfull',
    // })
    const user = await userService.registerUser({
        ...req.body,
        fileName: req.file.filename,
      });
      if (user)
        return res.json({ status: true, message: "User added Successfully" });
    } 
    return res.json({ status: false, message: "Failed to add user!" });
  }catch (err) {}
  
  
};
