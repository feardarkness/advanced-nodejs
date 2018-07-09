const personas = [
  {
    nombre: 'Juan Perez',
    edad: 20,
  },
  {
    nombre: 'Marcia Na',
    edad: 15,
  },
  {
    nombre: 'Medi Terraneo',
    edad: 35,
  },
  {
    nombre: 'Juan Ita',
    edad: 2,
  },
];
const precios = ['1.5', '5.28', '3.65'];
const preciosFloat = precios.map(precio => parseFloat(precio));
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(preciosFloat);
console.log('+++++++++++++++++++++++++++++++++++++++++++');

const precios2 = ['1.5', 'gratis', '3.65'];
const preciosFloarFiltrados = precios2.map(precio => parseFloat(precio)).filter(precio => precio);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(preciosFloarFiltrados);
console.log('+++++++++++++++++++++++++++++++++++++++++++');

// más predecible, mejor que con funciones anónimas
const obtenerNombre = persona => persona.nombre;
const arrayNombres = personas.map(obtenerNombre);

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(arrayNombres);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
