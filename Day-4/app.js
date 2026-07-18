let http = require("http");
// console.log(http);

// let data = {
//   firstName: "John",
//   age: 45,
// };
const server = http.createServer((req, res) => {
  //     console.log(req.url)
  //   res.end("Hello Server");
  //   console.log(req.method);
  //   if (req.url == "/") {
  //     res.end("Hello Server");
  //   } else if (req.url == "/about") {
  //     res.end(`<h1>This is a about page</h1>`);
  //   } else if (req.url == "/homepage") {
  //     res.end(`<h1>This is a homepage route</h1>`);
  //   } else {
  //     res.end(`<h1>404 Not Found</h1>`);
  //   }
  if (req.url == "/" && req.method === "GET") {
    res.end("Students Data");
  } else if (req.url == "/student" && req.method === "POST") {
    res.end("Student Added");
  } else if (req.url == "/student" && req.method === "PUT") {
    res.end("Student Deatils Updated");
  } else if (req.url == "/student" && req.method === "DELETE") {
    res.end("Student deleted");
  } else {
    res.end("No Route Found");
  }
});

server.listen(3000, () => {
  console.log("server running");
});
