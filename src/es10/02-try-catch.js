try {
  hello();
} catch (error) {
  console.log(error);
}

// best and new way to manage an error

try {
  anotherFunction();
} catch {
  console.log('This is an ErrOR');
}
