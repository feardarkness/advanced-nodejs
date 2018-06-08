/**
 * Allow multiple values
 * @param  {String[]} ...arr multipe values
 */
function passParams(...arr) {
  return arr;
}

const twoParams = passParams('a', 'b');
const threeParams = passParams('a', 'b', 'c');

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(twoParams);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(threeParams);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
