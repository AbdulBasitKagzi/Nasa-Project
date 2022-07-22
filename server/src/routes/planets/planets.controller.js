const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  // status is optional and .json() will convert string to json object
  return res.status(200).json(planets);
}

module.exports = { getAllPlanets };
