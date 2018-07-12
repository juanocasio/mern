const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
const port = process.env.port || 5000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

//connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(err => console.log(err));

//use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

app.get("/", (requestAnimationFrame, res) => {
  res.send("Yo!!!!!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
