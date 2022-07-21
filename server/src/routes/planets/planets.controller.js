const planets = require("../../models/planets.model");

function getAllPlanets(req, res) {
  // status is optional and .json() will convert string to json object
  return res.json(planets);
}

module.exports = getAllPlanets();
