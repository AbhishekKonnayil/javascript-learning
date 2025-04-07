const person = { name: "Abhishek", age: 25, city: "Kollam" }
const { name, ...rest } = person;
console.log(name);
console.log(rest);