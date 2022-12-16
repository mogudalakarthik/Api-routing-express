const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.send("Home Page");
  response.send("About Page");
});

module.exports = app;
