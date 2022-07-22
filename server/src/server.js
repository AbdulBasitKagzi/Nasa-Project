const http = require("http");

const app = require("./app");
const { loadPlanets } = require("./models/planets.model");
// giving port number
const PORT = 8000;
// created server with the help of app.js file
const server = http.createServer(app);

// server is listening
async function start() {
  await loadPlanets();
  server.listen(PORT, () => {
    console.log(`server is listening ${PORT}`);
  });
}
start();
