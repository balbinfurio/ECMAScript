const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Async!!'), 5000)
      : reject(new Error('Errorcito!'));
  })
}

const anotherFunction = async () => {
  const something = await fnAsync(); // waits until fnAsync function is done to do its thing
  console.log(something);
  console.log('Hello');
}

console.log('Before');
anotherFunction();
console.log('After');

// output:
// Before
// After
// Async!!
// Hello
