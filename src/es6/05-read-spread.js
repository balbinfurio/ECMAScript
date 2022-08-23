// Arrays destructuring

let fruits = ['apple', 'banana'];
let [a, b] = fruits;
console.log(a, b); // apple banana
console.log(fruits[0], fruits[1]); // apple banana

// Object destructuring

let user = {
    username: 'Balbin',
    age: 21
};

let { username, age} = user; // First the values that I want to get, then the variable
console.log(username, age); // Balbin 21

console.log(user.username, user.age); // Balbin 21
