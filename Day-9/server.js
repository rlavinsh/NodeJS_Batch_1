const express = require("express");
const app = express();
/* 
const students = [
  { id: 1, name: "Rahul", course: "MERN", city: "Bhopal" },
  { id: 2, name: "Aman", course: "Java", city: "Indore" },
  { id: 3, name: "Priya", course: "MERN", city: "Delhi" },
  { id: 4, name: "Neha", course: "Python", city: "Bhopal" },
  { id: 5, name: "Rohit", course: "Java", city: "Delhi" },
];

app.get("/students", (req, res) => {
  const course = req.query.course;
  const city = req.query.city;

  let filterStudents = [...students];
  console.log(filterStudents);

  if (course) {
    filterStudents = filterStudents.filter((student) => {
      return course.toLowerCase() === student.course.toLowerCase();
    });
  }

  if (city) {
    filterStudents = filterStudents.filter((student) => {
      return city.toLowerCase() === student.city.toLowerCase();
    });
  }
  res.send(filterStudents);
});
*/

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2500 },
  { id: 4, name: "Monitor", price: 12000 },
];

app.get("/product/:id", (req, res) => {
  const productId = req.params.id;

  let productCopy = [...products];

  let product = productCopy.find((Item) => {
    return productId == Item.id;
  });
  if (!product) {
    return res.send({
      message: "Product Not Found",
    });
  }
  let discountPrice = product.price * 0.9;
  product.discountPrice = discountPrice;
  res.send(product);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
