let fruits = ["Apple", "banana", "orange"]
fruits.push("pear")
fruits.pop()
fruits.unshift("Grape")
fruits.shift()
fruits.forEach(fruit => console.log(fruit.length));
// let lengths = fruits.map(fruit => console.log(fruit.length))
let filtered = fruits.filter(fruit => console.log(fruit.length > 5));
let nfruits = fruits.map(fruit => fruit.length);
console.log(nfruits)