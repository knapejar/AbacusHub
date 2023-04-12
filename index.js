const express = require("express");

const app = express();

app.use(express.static('static'));

app.get("/", (req, res) => {
  // Redirect to static/login.html
  res.redirect("/login.html");
  //res.send("Version 0.1");
  //res.send(records);
  //Print time
  //res.send(new Date().toString());
});

app.get("/version", (req, res) => {
  res.send("Version 0.1");
});

records = [];

app.get("/records", (req, res) => {
    res.send(records);
});

app.get("/submit", (req, res) => {
  //try or send all errors
  try {
    var record = req.query;
    records.push(record);
    if (records.length > 5) {
      records.shift();
    }
    res.send("OK");
  } catch (err) {
    res.send(err);
  }
});

module.exports = app;