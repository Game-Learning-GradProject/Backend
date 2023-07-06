const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const student = require("./routes/students");
const parents = require("./routes/parents");
const FSE = require("./routes/DaTa");
const data = require("./routes/dataRouter");
const Task = require("./routes/Task");
const feedback = require("./routes/feedbackRouter");
const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin",  "http://localhost:8080");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.use("/image", express.static(path.join("Image")));
app.use("/StudentProfilePic", express.static(path.join("StudentProfilePic")));
app.use("/Profile", express.static(path.join("Profile")));
app.use("/ParentProfilePic", express.static(path.join("ParentProfilePic")));
app.use("/student", student);
app.use("/parent", parents);
app.use("/FSE", FSE);
app.use("/Task", Task);
app.use("/data", data);
app.use("/feedback", feedback);

mongoose.connect(
  //"mongodb://localhost:27017",
  "mongodb+srv://ahmed:7IxlE70oZXGK8WVz@cluster0.urdmbgm.mongodb.net/questions?retryWrites=true&w=majority",
  {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to DB!")
);

app.listen(8080);
