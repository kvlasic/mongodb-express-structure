const express = require("express");
const router = express.Router();
const LivingSpace = require("../models/livingSpace");

router.route("/").get(async (req, res) => {
  const livingspace = await LivingSpace.find({});
  res.json(livingspace);
});

router.get("/new", (req, res) => {
  res.send("New living space");
});

module.exports = router;
