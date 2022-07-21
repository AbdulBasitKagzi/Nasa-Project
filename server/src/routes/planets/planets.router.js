const express = require("express");
const planetsCaller = require("./planets.controller");
const planetsRouter = express.Router();

planetsRouter.get("/", planetsCaller.getAllPlanets());
