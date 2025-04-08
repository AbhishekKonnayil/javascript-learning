function greet({ name, age }) {
    console.log(`Hello my name is ${name} and I'm ${age} years old `)
}
greet({ name: "Abhishek", age: 25 })

const hello = ({ name, age }) => console.log(`Hello my name is ${name} and I'm ${age} years old.`)
greet({ name: "Abhiith", age: 27 })