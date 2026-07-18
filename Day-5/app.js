const http = require("http");

let students = [
  { id: 1, name: "Rahul", course: "Node" },
  { id: 2, name: "Aman", course: "React" },
];
const server = http.createServer((req, res) => {
  //    res.end("Hello server")
  if (req.url == "/allStudents" && req.method == "GET") {
    res.end(JSON.stringify(students));
  } else if (req.url == "/createStudents" && req.method == "POST") {
    let newStudent = { id: 3, name: "Priya", course: "Java" };
    students.push(newStudent);
    res.end("Student Added");
  } else if (req.url == "/updateStudentDetail" && req.method == "PATCH") {
    students[1].course = "MERN";
    res.end("Course Updated");
  } else if (req.url == "/updateStudent" && req.method == "PUT") {
    students[1] = { id: 2, name: "Aman Kumar", course: "Backend" };

    res.end("Student Replaced");
  } else if (req.url == "/deleteStudent" && req.method == "DELETE") {
    students.pop();
    res.end("Student Deleted");
  } else {
    res.end("Route Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
