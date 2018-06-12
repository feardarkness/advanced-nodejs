const set = new Set();

set.add('uno');
set.add(2);
set.add({ a: 'a' });

set.add(2);
set.add({ a: 'a' });

// No se agrega 2 porque ya existe, pero si se agrega el objeto dos veces porque en realidad son punteros distintos
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(set); // Set { 'uno', 2, { a: 'a' }, { a: 'a' } }
console.log('+++++++++++++++++++++++++++++++++++++++++++');

const movilidades = [
  {
    tipo: 'automovil',
    color: 'rojo',
  },
  {
    tipo: 'moto',
    color: 'verde',
  },
  {
    tipo: 'camion',
    color: 'rojo',
  },
];

// ejemplo con reduce
const datos = [...movilidades.reduce((colors, { color }) => colors.add(color), new Set())];

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(datos);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
