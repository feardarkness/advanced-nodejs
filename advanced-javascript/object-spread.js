const obj1 = {
  a: 1,
  b: {
    c: 2,
  },
};

const copy = {
  ...obj1,
};

copy.b.c = 10;

// esto muta el objeto uno también, para arreglarlo se debe usar spread en el otro objeto también
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(obj1);
console.log(copy);
console.log('+++++++++++++++++++++++++++++++++++++++++++');

// ------------------------------------------
const obj2 = {
  a: 1,
  b: {
    c: 2,
  },
};

const copy2 = {
  ...obj2,
  b: {
    ...obj2.b,
  },
};

copy2.b.c = 10;

// con este nuevo spread ya no se esta mutando el primer objeto
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(obj2);
console.log(copy2);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
