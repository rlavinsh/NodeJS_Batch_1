const express = require("express");
const app = express();

const employees = [
  {
    id: 1,
    name: "Rahul",
    department: "HR",
    salary: 35000,
  },
  {
    id: 2,
    name: "Aman",
    department: "Developer",
    salary: 60000,
  },
  {
    id: 3,
    name: "Priya",
    department: "Developer",
    salary: 70000,
  },
  {
    id: 4,
    name: "Neha",
    department: "HR",
    salary: 51000,
  },
];

app.get("/employees", (req, res) => {
  // console.log(req.query);
  let filterEmployees = [...employees];
  let developer = req.query.department;
  let salary = req.query.salary;
  // console.log(salary);

  if (developer) {
    filterEmployees = filterEmployees.filter((val) => {
      return val.department.toLocaleLowerCase() === developer.toLowerCase();
    });
  }

  if (salary) {
    filterEmployees = filterEmployees.filter((emp) => {
      return emp.salary >= salary;
    });
  }

  res.status(200).json({
    success: true,
    message: "All Users",
    filterEmployees,
  });
});

app.listen(3000, () => {
  console.log("server running on port");
});
