/*
Create

POST /register

Body

{
   "name":"Rahul",
   "email":"rahul@gmail.com",
   "age":22
}

Rules

If any field missing

Return

{
   "message":"All fields are required"
}

If age less than 18

Return

{
   "message":"Age must be 18+"
}

Otherwise

Return

{
   "message":"Registration Successful",
   "user":{...}
}
*/

