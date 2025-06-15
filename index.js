const foo = function() {
  return 'bar';
};

const divide = function() {
  return 2000 / 100;
};


const square = x => x * x;


const add = (a, b) => a + b;


const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
};


module.exports = {
  foo,
  divide,
  square,
  add,
  sum,
};
