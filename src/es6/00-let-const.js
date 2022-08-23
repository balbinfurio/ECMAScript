var lastName = 'Balbin'; //Declaration y Assignation
lastName = 'Another'; // Re-assignation
console.log(lastName); // Another

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit); // Kiwi

const animal = 'Dog';
animal = 'Cat';
console.log(animal) //TypeError

//

const fruits = () => 
{
    if(true)
    {
        var fruit1 = 'Apple'; // function scope
        let fruit2 = 'Kiwi'; // block scope
        const fruit3 = 'Banana'; // block scope
    }
    console.log(fruit1); // Apple
    console.log(fruit2); // ReferenceError because block scope
    console.log(fruit3); // Not even got that far
} 

fruits(); 

