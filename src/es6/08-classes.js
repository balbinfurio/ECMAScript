// constructor
class user {
  // constructor
  constructor(name) {
    // this: makes a reference to the parent object (the constructor in this case)
    console.log('new user');
    this.name = name;
  }
  // Methods
  speak() {
    return 'Hi'
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const furio = new user(); // instance
console.log(furio.speak()); // Hi
const balbin = new user(); // another instance
console.log(balbin.speak()); // Hi
const nameWithArg = new user('Selina'); // passing an arg
console.log(nameWithArg.greeting()); // Hi Selina

// setters and getters

class userDev {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  // getter
  get uAge() {
    return this.age;
  }

  // setter
  set uAge(n) {
    this.age = n;
  }
}

const furioDev = new userDev('Furio', 21);
console.log(furioDev.uAge); // getter
console.log(furioDev.uAge = 20); // setter