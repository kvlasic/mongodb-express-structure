const express = require("express");
const router = express.Router();
const LivingSpace = require("../models/livingSpace");

router.route("/").get(async (req, res) => {
  try {
    const livingspace = await LivingSpace.find({});
    res.json(livingspace);
  } catch (err) {}
  res.status(500).json({ message: err.message });
});

router.get("/new", (req, res) => {
  res.send("New living space");
});

module.exports = router;
