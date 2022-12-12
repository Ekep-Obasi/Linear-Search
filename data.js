let users = [
  { name: "Blaise Pascal", age: 20, gender: "M" },
  { name: "Gills Jordan", age: 19, gender: "M" },
  { name: "Brandon Carime", age: 25, gender: "M" },
  { name: "Joseph Blake", age: 30, gender: "M" },
  { name: "Peter Buka", age: 29, gender: "M" },
  { name: "Simon Sinek", age: 24, gender: "M" },
  { name: "Chris Brown", age: 23, gender: "M" },
  { name: "John Bosco", age: 22, gender: "M" },
  { name: "Gordon Alexandra", age: 27, gender: "M" },
  { name: "James Kim", age: 22, gender: "M" },
  { name: "Oliver Pern", age: 23, gender: "M" },
  { name: "Paul Enenche", age: 67, gender: "M" },
  { name: "Lydia Shirer", age: 20, gender: "F" },
  { name: "Flora Belinda", age: 19, gender: "F" },
  { name: "Esther Roseline", age: 21, gender: "F" },
  { name: "Josiane Elsa", age: 18, gender: "F" },
  { name: "Lora Jane", age: 7, gender: "F" },
  { name: "Diana Ericka", age: 1, gender: "F" },
];

let result = users.map((items) => items.name);
console.log(result);

let sum = users.reduce((total, item) => item.age + total, 0);

let searchGender = users.filter((item) => item.gender == "F");
console.log(searchGender);
