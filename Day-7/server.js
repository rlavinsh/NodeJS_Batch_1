const express = require("express");

const app = express();
const user = [
  { id: 1, firstName: "hello" },
  {
    id: 2,
    firstName: "john",
  },
  {
    id: 3,
    firstName: "world",
  },
];

// mujeh app ka ek instance create karna hein

// const user = [
//   { id: 1, firstName: "hello" },
//   {
//     id: 2,
//     firstName: "john",
//   },
//   {
//     id: 3,
//     firstName: "world",
//   },
// ];

const pizza = [
  {
    id: 1,
    name: "Pepperoni",
    toppings: ["pepperoni", "cheese", "tomato sauce"],
    price: 12.99,
  },
  {
    id: 2,
    name: "Margherita",
    toppings: ["fresh mozzarella", "basil", "tomato sauce"],
    price: 10.99,
  },
  {
    id: 3,
    name: "Supreme",
    toppings: ["pepperoni", "sausage", "onions", "peppers", "mushrooms"],
    price: 15.99,
  },
  {
    id: 4,
    name: "Veggie",
    toppings: ["ham", "pineapple", "cheese", "tomato sauce"],
    price: 13.99,
  },
  {
    id: 5,
    name: "Veggie",
    toppings: ["onions", "peppers", "mushrooms", "olives", "spinach"],
    price: 14.99,
  },
];

app.use(express.json());

app.get("/allUsers", (req, res) => {
  res.send(user);
});
app.get("/allUsers/:id", (req, res) => {
  console.log(req.params.id);

  const id = req.params.id;
  let result = user.find((val) => {
    return val.id == id;
  });
  res.send(result);
});

app.get("/pizza", (req, res) => {
  const serachName = req.query.name;
  let newData = pizza.filter((val) => {
    return serachName.toLowerCase() == val.name.toLowerCase();
  });
  res.send(newData);
});

// app.get("/products/:id",(req,res)=>{})
// app.get("/", (req, res) => {
//   // res.send(user)
//   //   console.log(req.body);
//   //   console.log(req.params);
//   console.log(req.query);
//   res.send("Done");
// });

app.listen(3000, () => {
  console.log("server running using express js");
});
