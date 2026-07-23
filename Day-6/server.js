const express = require("express");
// mujeh app ka ek instance create karna hein

const app = express();

app.get("/", (req, res) => {
  res.send("server running using express js");
});

app.get("/home", (req, res) => {
  res.send("This is a homepage");
});
app.get("/about", (req, res) => {
  res.send("This is a aboutPage");
});
app.get("/contact", (req, res) => {
  res.send("This is a contactPage");
});

app.listen(3000, () => {
  console.log("server running using express js");
});
