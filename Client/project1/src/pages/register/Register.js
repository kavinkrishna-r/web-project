import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [fName, setFname] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [profileImg, setprofileImg] = useState("");

  const handleFname = (e) => {
    setFname(e.target.value);
  };
  const handlelName = (e) => {
    setlName(e.target.value);
  };
  const handleEmail = (e) => {
    setlName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirm_password(e.target.value);
  };
  const handleprofileImgUpload = (e) => {
    setprofileImg(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("file", profileImg);
    formData.append("fName", fName);
    formData.append("lName", lName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirm_password", confirm_password);
    
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const data = await axios.post("http://localhost:3001/api/register",formData,config);

    if (data.status === 201) {
      alert("User added successfullky!");
    } else {
      alert("Failed!");
    }

  }

  return (
    <>
      <div class="signup-form">
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Register</h2>
          <p class="hint-text">
            Create your account. It's free and only takes a minute.
          </p>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  name="first_name"
                  placeholder="First Name"
                  required="required"
                  onChange={handleFname}
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  name="last_name"
                  placeholder="Last Name"
                  required="required"
                  onChange={handlelName}
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
              required="required"
              onChange={handleEmail}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
              required="required"
              onChange={handlePassword}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              required="required"
              onChange={handleConfirmPassword}
            />
          </div>

          <div class="form-group">
            <div class="mb-3">
              <label for="formprofileImg" class="form-label">
                upload proprofileImg image
              </label>
              <input
                class="form-control"
                type="profileImg"
                id="formprofileImg"
                onChange={handleprofileImgUpload}
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-check-label">
              <input type="checkbox" required="required" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-success btn-lg btn-block" onSubmit={handleSubmit}>
              Register Now
            </button>
          </div>
        </form>
        <div class="text-center">
          Already have an account? <a href="#">Sign in</a>
        </div>
      </div>
    </>
  );
}
