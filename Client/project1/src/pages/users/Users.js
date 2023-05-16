import Axios from "axios";
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/showUserData").then((res) =>
      setUsers(res.data)
    );
    console.log(users);
  }, []);

  return (
    <>
      {users.map((item) => {
        return (
          <div>
            <h1>{item.userName}</h1>
            <p>{item.email}</p>
            <p>{item.userNum}</p>
            <img src={item.image} alt="img"></img>
          </div>
        );
      })}
    </>
  );
}

export default Users;
