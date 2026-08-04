const employees = [
  {
    id:1,
    name:"Rahul",
    department:"HR",
    salary:35000
  },
  {
    id:2,
    name:"Aman",
    department:"Developer",
    salary:60000
  },
  {
    id:3,
    name:"Priya",
    department:"Developer",
    salary:70000
  },
  {
    id:4,
    name:"Neha",
    department:"HR",
    salary:45000
  }
];

/*
Create

GET /employees

If

?department=Developer

Return only developers.

If

?salary=50000

Return employees having salary greater than or equal to 50000.

If both are given

?department=Developer&salary=50000

Return only developers whose salary is greater than or equal to 50000.
*/
