let hello = 'Hello';
let world = 'World';
let oldWay = hello + ' ' + world + '!'; // Old way to concatenate strings  
console.log(oldWay);

// Template literals

let properWay = `${hello} ${world}!`; // Proper way to concatenate
console.log(properWay);

// Multi-line strings

let lorem = 'This is a string \n' + 'another line'; // old-fashioned way XD

let lorem2 = `This is the first line
This is the second one
`;                             // The proper way again

console.log(lorem2);