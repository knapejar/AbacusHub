const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
  // Redirect to static/login.html
  res.redirect("/hub/login.html");
  //res.send("Version 0.1");
  //res.send(records);
  //Print time
  //res.send(new Date().toString());
});

app.get("/version", (req, res) => {
  res.send("Version 0.1");
});

var currentCommand = "";

app.get("/command", (req, res) => {
  // Send back the current count
  res.send(currentCommand);
  currentCommand = "";
});

app.get("/submitCommand", (req, res) => {
  // Save the count from get parameter count
  currentCommand = req.query.count;
  // Send back the current count
  res.send(currentCommand);
});

module.exports = app;

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});