const db = require("../../../config/db");

module.exports.loginUser = async (props) => {
  const { email, password } = props;
  try {
    const user = await db.raw(
      "SELECT * FROM registered_users WHERE email = ? AND pass = ?",
      [email, password]
    )
    return user[0];
  } catch (err) {
    console.log(err);
  }
  return null;
};
