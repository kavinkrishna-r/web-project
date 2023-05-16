const db = require("../../../config/db");



module.exports.addUser = async (props) => {
  const { name, email, num, filename } = props;
  try {
    const user = await db.raw("INSERT INTO users SET ?", {
      userName: name,
      email: email,
      userNum: num,
      image: filename,
    });
    return user;
  } catch (err) {
    console.log(err);
  }
  return null;
};
