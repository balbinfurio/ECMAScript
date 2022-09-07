const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Works!!'); // response(below)
    } else {
      reject('fuck!'); // err(below)
    };
  });
};

anotherFunction()
  .then(response => console.log(response)) //  response or any word you want
  .catch(err => console.log(err));
