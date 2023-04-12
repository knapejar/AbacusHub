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

var currentCount = 0;

app.get("/people", (req, res) => {
  // Send back the current count
  res.send(currentCount);
});

app.get("/submitCount", (req, res) => {
  // Save the count from get parameter count
  currentCount = req.query.count;
  // Send back the current count
  res.send(currentCount);
});

module.exports = app;

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});