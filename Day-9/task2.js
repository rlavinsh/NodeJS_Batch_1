const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2500 },
  { id: 4, name: "Monitor", price: 12000 },
];

/*
Create

GET /product/:id

If product exists

Return

{
   "id":1,
   "name":"Laptop",
   "price":50000,
   "discountPrice":45000
}

Discount = 10%

If not found

{
   "message":"Product not found"
}
*/
