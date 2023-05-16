const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const app = express();
const myRoute = require("./routes");

app.use(cors());
app.use(express.json());

myRoute(app);

app.listen(3001, (err, result) => {
  err ? console.log(err) : console.log("server is running on 3001");
});
