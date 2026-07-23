/**
 * /home -> This is a homepage
 * /about -> this is a about page
 * /contact -> this is a contact page
 *  * -> No route found
 *
 */

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/home" && req.method === "GET") {
    res.end("This is homePage");
  } else if (req.url == "/about" && req.method === "GET") {
    res.end("This is a about Page");
  } else if (req.url == "/contact" && req.method === "GET") {
    res.end("This is a contact Page");
  } else {
    res.end("No Route Found");
  }
});

server.listen("3000", () => {
  console.log("server running on port 3000");
});
