const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project1'
});

db.connect((err,result) => {
    err ? console.log(err) : console.log("db connected successfully");
})

// endpoints 
app.get('/',(req,res) => res.send("hello"));
app.post('/userData', (req,res) => {
    console.log(req.body);
    const userName = req.body.name;
    const email = req.body.email;
    const userNum = req.body.num;
    const image = req.body.image;

    db.query("Insert into users(userName,email,userNum,image) values(?,?,?,?)",[userName,email,userNum,image],
    (err,result) => {
        err ? console.log(err) : res.send(result);
    }
    )
})

app.get('/showUserData',(req,res) => {
    db.query("select * from users",(err,result) => {
        err ? console.log(err) : res.send(result);
    })
})



// server port
app.listen(3001, (err,result) => {
    err ? console.log(err) : console.log("server is running on 3001");
});