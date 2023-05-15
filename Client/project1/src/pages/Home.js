import {TextField} from "@mui/material";
import Box from '@mui/material/Box';
import {Input,Button} from "@mui/material";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [num,setNum] = useState("");
  const [image,setImage] = useState('');
  const [users,setUsers] = useState([]);

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
      e.preventDefault();
  }

  const userSubmit = (e) => {
     console.log(name+email+num+image);
     Axios.post("http://localhost:3001/userData",{
        name: name,
        email: email,
        num: num,
        image: image
     });
  }

  const showUsers = () => {
    Axios.get("http://localhost:3001/showUserData").then((res) => console.log(res));
    navigate("/Users");
  }
  
  return (
    <div className="App">
       <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
       >
        
       <TextField id="filled-basic" label="Name" variant="filled" onChange={(e) => setName(e.target.value)}/>
       <TextField id="filled-basic" label="Email" variant="filled" onChange={(e) => setEmail(e.target.value)}/>
       <TextField id="filled-basic" label="Number" variant="filled" type="number" onChange={(e) => setNum(e.target.value)}/>
       <Input
       type="file"
       hidden
       onChange={(e) => setImage(e.target.value)}
       />
       
       <Button variant="outlined" type="submit" onClick={userSubmit}>Submit</Button>
       <Button variant="outlined" onClick = {showUsers}>Show Users</Button>
       
       </Box>
    </div>
  );
}


