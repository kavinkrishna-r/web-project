const userService = require('../service/index')

module.exports.getAllUsers = async (req, res) =>  {
    try {
        const users = await userService.getAllUsers();
        return res.json({status: true, users, message: "Successfully retrieved users!" });
    } catch(err) {
        return res.json({status: false, users: [], message: "Failed to retrieve users!" });
    }
}

module.exports.addUser = async (req,res) => {
    try{
       const user = await userService.addUser(req.body);
       return res.json({status: true, message: "User added Successfully" });
    } catch(err) {
        return res.json({status: false, message: "Failed to add user!" });
    }
};