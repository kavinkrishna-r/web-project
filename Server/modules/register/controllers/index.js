module.exports.addUser = async (req,res) => {
    try{
       const user = await userService.registerUser(req.body);
       return res.json({status: true, message: "User added Successfully" });
    } catch(err) {
        return res.json({status: false, message: "Failed to add user!" });
    }
};