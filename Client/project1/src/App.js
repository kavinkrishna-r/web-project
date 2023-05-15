import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
    return (
      <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/Users">Users</Link>
        <Routes>
          <Route path ="/" element={<Home />}></Route>
          <Route path ="/Users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
