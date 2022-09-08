const user = {
  username: 'balbinfurio',
  age: 21,
  country: 'Colombia'
};

const { username, ...values } = user;
console.log(user);
console.log(values);
