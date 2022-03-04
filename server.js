const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const connectToDB = require("./models");
require("dotenv").config();

// CONNECT TO DATABASE THEN LISTEN ON PORT
connectToDB().then(() => {
  app.listen(PORT, () => console.log("STARTED LISTENING ON PORT " + PORT));
});

//import routes
const livingSpacesRouter = require("./routes/livingSpaces");

app.use("/living-spaces", livingSpacesRouter);
