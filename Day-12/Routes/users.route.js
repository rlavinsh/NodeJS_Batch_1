const express = require("express")

const userRoutes = express.Router()



userRoutes.get("/", (req, res) => {
  res.send("This is a homePage");
});

userRoutes.get("/about", (req, res) => {
  res.send("About Page");
});

userRoutes.get("/contact", (req, res) => {
  res.send("This is a contact Page");
});

module.exports = userRoutes
