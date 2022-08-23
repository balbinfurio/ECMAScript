const newUser = (name, age, country) => 
{
    var name = name || 'Balbin';    // Default value WITH OR(||) operator
    var age = age || '21';          // Default value
    var country = country || 'Transylvania'; // Default value
    console.log(name, age, country);
}

newUser(); // Prints the default values of the function
newUser('Furio', 27, 'Greece'); // Prints this values

// Proper way to have default params

const newAdmin = (name = 'Balbin', age = 21, country = 'Transylvania') =>
{
    console.log(name, age, country);
}

newAdmin();
newAdmin('Furio', 25, 'Greece');