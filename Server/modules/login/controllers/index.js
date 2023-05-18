const userService = require("../service/index");

module.exports.loginUser = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);
    if (user.length > 0) {
      return res.json({
        status: true,
        user: user[0],
        message: "Logged in Successfully",
      });
    } else {
      return res.json({ status: false, message: "Wrong username/password" });
    }
  } catch (err) {
    console.log(err);
    return res.json({ status: false, message: "Failed to login user!" });
  }
};
