const http = require("http");

const app = require("./app");

// giving port number
const PORT = 8000;
// created server with the help of app.js file
const server = http.createServer(app);

// server is listening
server.listen(PORT, () => {
  console.log(`server is listening`);
});
