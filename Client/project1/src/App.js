import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import './App.css'

function App() {
    return (
      <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/Users">Users</Link>
          <Link to="/Login">Login</Link>
        <Routes>
          <Route path ="/" element={<Home />}></Route>
          <Route path ="/login" element={<Login />}></Route>
          <Route path ="/register" element={<Register />}></Route>
          <Route path ="/Users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
