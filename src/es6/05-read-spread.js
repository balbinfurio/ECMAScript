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


// spread operator

let person = {
    name: 'furio',
    age: 25
};

let country = 'greece';

let data = { ...person, country};
console.log(data); // { name: 'furio', age: 25, country: 'greece' }
data = {id: 1037, ...person, country}; // You could add values at the beginning as well
console.log(data); // { id: 1037, name: 'furio', age: 25, country: 'greece' }

// rest params

const sum = (num, ...values) =>
{
    console.log(values); // [ 1, 2, 3 ]
    console.log(num + values[0]); // 2
    return num + values[0];
}

sum(1, 1, 2, 3);


