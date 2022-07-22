const launches = new Map();

const launch = {
  fligtNumber: 100,
  missionName: "Kepler Exploration X",
  rocket: "Explorer",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler 442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.fligtNumber, launch);
console.log("Returned", launches.get(launch.fligtNumber));

module.exports = {
  launches,
};
