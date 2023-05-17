const db = require("../../../config/db");

module.exports.registerUser = async (props) => {
  const { first_name, last_name, email, password, confirm_password, fileName } =
    props;
  try {
    const user = await db.raw(
      "INSERT INTO registered_users (first_name,last_name,email,pass,confirm_pass,image) VALUES (?,?,?,?,?,?)",
      [first_name, last_name, email, password, confirm_password, fileName]
    );
    return user;
  } catch (err) {
    console.log(err);
  }
  return null;
};
