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
// devuelve un array con las personas con edad >= 18
const mayoresDeEdad = personas.filter(persona => persona.edad >= 18);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(mayoresDeEdad);
console.log('+++++++++++++++++++++++++++++++++++++++++++');

// devuelve la primera persona con edad > 10
const primeraPersonaEdadMAyor10 = personas.find(persona => persona.edad > 10);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(primeraPersonaEdadMAyor10);
console.log('+++++++++++++++++++++++++++++++++++++++++++');

// devuelve la primera persona con edad > 90, undefined si no existe
const primeraPersonaEdadMAyor90 = personas.find(persona => persona.edad > 90);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(primeraPersonaEdadMAyor90);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
