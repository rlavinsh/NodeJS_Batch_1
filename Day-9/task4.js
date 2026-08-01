const movies = [
  {
    id:1,
    title:"KGF",
    rating:9
  },
  {
    id:2,
    title:"Pushpa",
    rating:8
  },
  {
    id:3,
    title:"Bahubali",
    rating:10
  },
  {
    id:4,
    title:"Animal",
    rating:7
  }
];

/*
Create

GET /movies

If query

?rating=8

Return all movies having rating greater than or equal to 8.

Expected

[
   {
      "title":"KGF"
   },
   {
      "title":"Pushpa"
   },
   {
      "title":"Bahubali"
   }
]
*/