const express = require("express");
const app = express();

app.use(express.json())

let employees = [
  {
    id: 1,
    name: "Rahul Sharma",
    department: "Development",
    designation: "Frontend Developer",
    salary: 55000,
    experience: 2,
    city: "Indore",
  },
  {
    id: 2,
    name: "Priya Verma",
    department: "Development",
    designation: "Backend Developer",
    salary: 65000,
    experience: 3,
    city: "Bhopal",
  },
  {
    id: 3,
    name: "Amit Singh",
    department: "HR",
    designation: "HR Executive",
    salary: 42000,
    experience: 1,
    city: "Delhi",
  },
  {
    id: 4,
    name: "Sneha Patel",
    department: "Testing",
    designation: "QA Engineer",
    salary: 50000,
    experience: 2,
    city: "Ahmedabad",
  },
  {
    id: 5,
    name: "Rohit Jain",
    department: "Development",
    designation: "Full Stack Developer",
    salary: 80000,
    experience: 5,
    city: "Pune",
  },
];

app.get("/employees", (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Employees",
    employees,
  });
});

app.get("/employees/:id", (req, res) => {
  let id = Number(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid Id",
    });
  }
  let employee = employees.find((emp) => {
    return emp.id === id;
  });

  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "User Found",
    employee,
  });
});

//POST wala

app.post("/employees", (req, res) => {
  let { name, department, designation, salary, experience, city } = req.body;

  if (
    !name ||
    !department ||
    !designation ||
    salary === undefined ||
    experience === undefined ||
    !city
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (
    name.trim() === "" ||
    department.trim() === "" ||
    designation.trim() === "" ||
    city.trim() === ""
  ) {
    return res.status(400).json({
      success: false,
      message: "Fields can't be Empty",
    });
  }

  salary = Number(req.body.salary);
  if (isNaN(salary)) {
    return res.status(400).json({
      success: false,
      message: "Please enter the valid salary",
    });
  }
  if (salary < 0) {
    return res.status(400).json({
      success: false,
      message: "Salary can't be negative",
    });
  }

  experience = Number(req.body.experience);
  if (isNaN(experience)) {
    return res.status(400).json({
      success: false,
      message: "Please enter the valid experience",
    });
  }
  if (experience < 0) {
    return res.status(400).json({
      success: false,
      message: "experience can't be negative",
    });
  }
  const newUser = {
    id: employees[employees.length - 1].id + 1,
    name,
    department,
    designation,
    salary,
    experience,
    city,
  };

  employees.push(newUser);

  return res.status(201).json({
    success: true,
    message: "User Created",
    newUser,
  });
});


app.listen(3000, () => {
  console.log("server is started");
});
