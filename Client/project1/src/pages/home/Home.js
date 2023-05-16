import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { Input, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [profileImg, setProfileImg] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addUser = async (e) => {
    var formData = new FormData();
    formData.append("file", profileImg);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("num", num);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const res = await axios.post(
      "http://localhost:3001/userData",
      formData,
      config
    );
    if (res.status === 201) {
      alert("User added successfullky!");
    } else {
      alert("Failed!");
    }
  };

  const getUsers = () => {
    axios
      .get("http://localhost:3001/showUserData")
      .then((res) => console.log(res));
    navigate("/Users");
  };

  return (
    <div className="App">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="filled-basic"
          label="Number"
          variant="filled"
          type="number"
          onChange={(e) => setNum(e.target.value)}
        />
        <Input
          type="file"
          hidden
          onChange={(e) => setProfileImg(e.target.files[0])}
        />

        <Button variant="outlined" type="submit" onClick={addUser}>
          Submit
        </Button>
        <Button variant="outlined" onClick={getUsers}>
          Show Users
        </Button>
      </Box>
    </div>
  );
}
