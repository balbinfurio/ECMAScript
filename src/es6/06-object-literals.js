// enhanced object literals

const newUser = (user, age, country) =>
{
    return{
        user: user,
        age: age,
        country: country
    }
}

const properWay = (user, age, country) =>
{
    return{
        user,
        age,
        country,
    }
}

console.log(newUser('Furio', 25, 'Transylvania'));
console.log(properWay('Furio', 50, 'Transylvania')); 
