const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Version 0.1");
  res.send(records);
  //Print time
  res.send(new Date().toString());
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