const express = require("express");
const cors = require("cors");
const planetsRouter = require("./routes/planets/planets.router");

const app = express();

// for cross origin we use cors which a middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// to parse incoming json from body of incoming request
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
