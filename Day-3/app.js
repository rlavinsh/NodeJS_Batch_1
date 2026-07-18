let fs = require("fs");

// fs.mkdir("student", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Folder Created");
// });

// fs.mkdir("./student/student2", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Folder Created"
//   );
// });

// fs.writeFile("./student/student2/student.txt", "hello student", (err) => {
//   if (err) {
//     console.log("something wrong");
//   }
//   console.log("file created");
// });

//let data = "hello student";
fs.readFile("./student/student2/student.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("err");
    return;
  }
  console.log(data);
});

console.log(fs.readFileSync("./student/demo.txt", "utf-8"));
