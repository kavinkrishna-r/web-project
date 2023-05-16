module.exports.registerUser = async (props) => {
    const { fName,lName,email,password,confirm_password,fileName } = props;
    try {
      const user = await db.raw("INSERT INTO registered_users SET ?", {
        first_name: fName,
        last_name: lName,
        email: email,
        pass: password,
        confirm_pass:confirm_password,
        image: fileName
      
      });
      return user;
    } catch (err) {
      console.log(err);
    }
    return null;
  };