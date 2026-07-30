const students = [
  { id: 1, name: "Rahul", course: "MERN", city: "Bhopal" },
  { id: 2, name: "Aman", course: "Java", city: "Indore" },
  { id: 3, name: "Priya", course: "MERN", city: "Delhi" },
  { id: 4, name: "Neha", course: "Python", city: "Bhopal" },
  { id: 5, name: "Rohit", course: "Java", city: "Delhi" }
];

/*
Create

GET /students

Rules

If no query is given

Return all students.

If

?course=MERN

Return only MERN students.

If

?city=Bhopal

Return only Bhopal students.

If both exist

?course=MERN&city=Bhopal

Return students satisfying BOTH conditions.

Expected Output

[
   {
      "id":1,
      "name":"Rahul"
   }
]
*/

