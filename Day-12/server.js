const express = require("express");

const userRoutes = require("./Routes/users.route");
const app = express();

// Jab bhi mujhe kuch common kaam karwana ho toh hum iske liye use karenge middlewares

// middlewares k pass 3 signatures hote hein
// jaise hum kehte hein req, res,next
// agar apko aage k route execute karne hein
// then you have to call the next

// middleware jis order mein hogi ushi order mein execute hogi

// mein middleware se req ,res ko bhi modify kar sakta hu
// jab bhi error aa jaye toh hum middleware ko kaise use karenge
//(err,req,res,next)
//()

const processRequest = (req, res, next) => {
  console.log("processing Request...");
  next();
};

const middleware2 = (req, res, next) => {
  console.log("Middleware 2");
  next();
};

const trackRequest = (req, res, next) => {
  console.log(`Method ${req.method} and URL: ${req.url}`);
  next();
};

// app.use(processRequest);
// app.use(middleware2);
// app.use(trackRequest);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use((req,res)=>{
  return res.status(404).json({
    success: false,
    message: "Route Not found"
  })
})
app.use(userRoutes);




app.listen(3000, (req, res) => {
  console.log("server running on port 3000");
});
