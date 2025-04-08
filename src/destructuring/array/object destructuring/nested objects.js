const User = { id: 1, name: { first: "Abhishek", Last: "Konnayil" } };
const { id, name, name: { first, Last } } = User;
console.log(id)
console.log(name)
console.log(first)
console.log(Last)