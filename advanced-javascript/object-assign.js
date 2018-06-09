const obj1 = {
  a: 5,
  b: 6,
};

const obj2 = {
  b: 7,
  c: 8,
};

// El obj1 tiene las propiedades del obj2, pero las propiedades de obj2 son las que predominan
// además, muta obj1
const unidos = Object.assign(obj1, obj2);

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(obj1); // { a: 5, b: 7, c: 8 }
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(obj2); // { b: 7, c: 8 }
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(unidos); // { a: 5, b: 7, c: 8 }
console.log('+++++++++++++++++++++++++++++++++++++++++++');

const obj3 = {
  a: 5,
  b: 6,
};

const obj4 = {
  b: 7,
  c: 8,
};

// ningún objeto muta, las propiedades del objeto mas exterior prevalecen sobre las propiedades del objeto interior
const unidos2 = Object.assign({}, obj3, obj4);

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(obj3); // { a: 5, b: 6 }
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(obj4); // { b: 7, c: 8 }
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(unidos2); // { a: 5, b: 7, c: 8 }
console.log('+++++++++++++++++++++++++++++++++++++++++++');

const obj5 = {
  a: {
    d: 10,
  },
  b: 6,
};

// los objetos internos no son duplicados, la refencia existe tanto en obj5 como en unidos 3
// por lo cuál cambiando uno de los valores ambos objetos son modificados
// la solución es usar object assign en cada objeto interno
const unidos3 = Object.assign({}, obj5);

unidos3.a.d = 100;
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(obj5); // { a: { d: 100 }, b: 6 }
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(unidos3); // { a: { d: 100 }, b: 6 }
console.log('+++++++++++++++++++++++++++++++++++++++++++');
