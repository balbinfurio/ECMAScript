// enhanced object literals

const newUser = (user, age, country) => // old way
{
    return{
        user: user,
        age: age,
        country: country
    }
}

const properWay = (user, age, country) => // new best and proper way
0
{
    return{
        user,
        age,
        country,
    }
}

console.log(newUser('Furio', 25, 'Transylvania')); // { user: 'Furio', age: 25, country: 'Transylvania' }
console.log(properWay('Furio', 50, 'Transylvania')); // { user: 'Furio', age: 25, country: 'Transylvania' }
