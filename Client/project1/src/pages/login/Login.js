import "./Login.css";
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogged, setUserLogged] = useState(false);
  const [userData, setUserData] = useState({});

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/login/loginUser",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.status) {
        console.log(response.data);
        setUserLogged(true);
        setUserData(response.data.user);
        alert(response.data.user.first_name + " logged in successfully");
      }
    } catch (err) {
      alert("failed to login");
    }
  };

  return (
    <div>
      {userLogged ? (
        <div>
          <h1>{userData.first_name}</h1>
        </div>
      ) : (
        <div id="login">
          <h3 class="text-center text-white pt-5">Login form</h3>
          <div class="container">
            <div
              id="login-row"
              class="row justify-content-center align-items-center"
            >
              <div id="login-column" class="col-md-6">
                <div id="login-box" class="col-md-12">
                  <form id="login-form" class="form" action="" method="post">
                    <h3 class="text-center text-info">Login</h3>
                    <div class="form-group">
                      <label for="Email" class="text-info">
                        Email:
                      </label>
                      <br />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        onChange={handleEmail}
                      />
                    </div>
                    <div class="form-group">
                      <label for="password" class="text-info">
                        Password:
                      </label>
                      <br />
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        onChange={handlePassword}
                      />
                    </div>
                    <div class="form-group">
                      <label for="remember-me" class="text-info">
                        <span>Remember me</span> 
                        <span>
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                          />
                        </span>
                      </label>
                      <br />
                      <input
                        type="submit"
                        name="submit"
                        class="btn btn-info btn-md"
                        value="submit"
                        onClick={handleSubmit}
                      />
                    </div>
                    <div id="register-link" class="text-right">
                      <a href="#" class="text-info">
                        Register here
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
