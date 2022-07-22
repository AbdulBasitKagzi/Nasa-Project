const express = require("express");
const cors = require("cors");
const path = require("path");

const morgan = require("morgan");
const { launches } = require("./models/launches.model");
const app = express();

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

// for cross origin we use cors which a middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));
// to parse incoming json from body of incoming request
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
// routers
app.use(planetsRouter);
app.use(launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
module.exports = app;
