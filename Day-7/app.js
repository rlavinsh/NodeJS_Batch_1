const http = require("http");
const user = {
  firstName: "Hello",
  lastName: "world",
};
const server = http.createServer((req, res) => {
  // res.end("Hello Server")
  res.end(JSON.stringify(user));
});

server.listen("3000", () => {
  console.log("server running on port 3000");
});
