function* iterate(array) {
  for (let value of array) {
    yield value;
  }
};

const it = iterate(['Balbin', 'Furio', 'Selina', 'Enzo', 'Damian']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//  prints "Balbin Furio Selina" at once