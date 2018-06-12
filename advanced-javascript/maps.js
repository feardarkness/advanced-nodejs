let filters = new Map()
  .set('filtro1', 'valor1')
  .set('filtro2', 'valor2')
  .set('filtro3', 'valor3');

filters.get('filtro3');

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(filters);
console.log('+++++++++++++++++++++++++++++++++++++++++++');

// se puede crear maps desde un array
let filters2 = new Map([['filtro1', 'valor1'], ['filtro2', 'valor2'], ['filtro3', 'valor3']]);

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(filters2);
console.log('+++++++++++++++++++++++++++++++++++++++++++');

// para eliminar un elemento
filters2.delete('filtro1');

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(filters2);
console.log('+++++++++++++++++++++++++++++++++++++++++++');

// creando un nuevo map sobreescribiendo los valores por defecto
const porDefecto = new Map()
  .set('filtro1', 'valor1')
  .set('filtro2', 'valor2')
  .set('filtro3', 'valor3');

const otros = new Map().set('filtro3', 'otro valor 3');

const actualizados = new Map([...porDefecto, ...otros]);

console.log('default +++++++++++++++++++++++++++++++++++++++++++');
console.log(porDefecto);
console.log('others +++++++++++++++++++++++++++++++++++++++++++');
console.log(otros);
console.log('actual +++++++++++++++++++++++++++++++++++++++++++');
console.log(actualizados);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
