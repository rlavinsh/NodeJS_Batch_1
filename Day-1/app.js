let fs = require("fs");
// console.log(fs);

// yeah ek file system module hein iska use karke mein apne system mein file create kar sakta hu
// Read kar sakte hein
// update kar sakte hein
// aur file ko delete bhi kar sakte hein

//writeFileSync

// fs.writeFileSync("student.txt", "hello fs");

// appendFileSync: data add karna ho yha update karna ho file mein
// fs.appendFileSync(
//   "student.txt",
//   "\n Node mein FS module par kaam kar rahe hein",
// );

// console.log("File updated");

//readFileSync: jab bhi mujhe file ka data read karna ho
// let data = fs.readFileSync("student.txt", "utf-8");
// console.log(data);
// console.log("File ka data read ho gaya hein");

//renameSync: Jab bhi mujhe apni file ka name change karna ho toh

// fs.renameSync("student.txt", "Faculty.txt");
// console.log("File ka name change ho gaya hein");

// existSync: To check ki yeah file exist karti hein yha Nahi

// console.log(fs.existsSync("Faculty.txt"));

// unlinkSync : jab bhi mujhe apni file delete karni ho
// fs.unlinkSync("Faculty.txt");
// console.log("file delete ho gayi");

// fs.writeFileSync("./files/Roadmap.txt","HTML")
// fs.appendFileSync("./files/Roadmap.txt", "\nCSS\nReact");
// let data = fs.readFileSync("./files/Roadmap.txt", "utf-8");
// console.log(data);

// fs.renameSync("./files/Roadmap.txt", "./files/path.txt");

// console.log(fs.existsSync("./files/path.txt"));

// fs.unlinkSync("./files/path.txt")
// console.log("File delete ho gayi");

//mkdirSync: yeah apke liye ek folder bana deta hein
// fs.mkdirSync("files")
// console.log("Folder ban gaya");

// readdirSync: esshe aap files and folders waha se aap read kar sakte ho
// console.log(fs.readdirSync("./files"));

// agar mujhe folder hi delete karna hein we are going to use rmdirSync Method
// fs.rmdirSync("./files");
// console.log("Folder delete ho gaya");

// mujhe ek file banani hein
// console.log("code start");
// let content = "Hello FS Module";
// fs.writeFile("./files/teach.txt", content, (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("File Created Successfully");
// });

// console.log("Code ends");

// mujhe ish file ka data read karna hein
// console.log("code start");

// fs.readFile("teacher.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("kuch error aayega");
//     console.log(err.message);
//     return;
//   }
//   console.log(`File ka data read ho gaya \n${data}`);
// });
// console.log("Code ends");

// let content = `\nIn next class we are going to disscuss about the another Modules\n After completing Node JS \n we are going to start React`;

// fs.appendFile("teacher.txt", content, (err) => {
//   if (err) {
//     console.log("something went wrong");
//     return;
//   }
//   console.log("data update ho gaya");
// });

// fs.mkdir("files", (err) => {
//   if (err) {
//     console.log("something went wrong");
//     return;
//   }
//   console.log("Folder created successfully");
// });

// fs.rename("./files/teach.txt","./files/student.txt",(err)=>{
//       if (err) {
//     console.log("something went wrong");
//     return;
//   }
//   console.log("File name changed");
// })

// console.log(fs.existsSync("./files/student.txt"));

// fs.readdir("./files", (err, data) => {
//   if (err) {
//     console.log("something went wrong");
//     return;
//   }
//   console.log(data);
// });


// rename
//mkdir
//readdir
//rmdir
//existSync

// https://github.com/rlavinsh/NodeJS_Batch_1
