const estaDisponible = () => {
  return Math.random() < 0.9;
}

const firmas = new Map()
  .set(10, 'Firma 10')
  .set(12, 'Firma 12')
  .set(13, 'Firma 13')
  .set(14, 'Firma 14')
  .set(15, 'Firma 15');

// itera sobre cada elemento del map
for (const firma of firmas) {
  const [id, nombre] = firma;
  console.log(id, nombre);
  if (!estaDisponible(id)) {
    console.log(`${nombre} no esta disponible\n`);
  }
}
console.log('Todas las firmas están disponibles\n');

const objeto = {
  a: 1,
  b: 2,
  c: 45,
  d: 'pato',
};

// itera sobre cada llave del objeto
for (const llave in objeto) {
  // imprime las llaves del objeto (a, b, c, d)
  console.log(llave);
}

