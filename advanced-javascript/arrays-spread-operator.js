const items = ['a', 'b', 'c', 'z', 'm'];
const sameItems = items;
const itemsCopy = [...items];

items[2] = 'in;';

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log('items', items);
console.log('sameItems', sameItems);
console.log('itemsCopy', itemsCopy);
console.log('+++++++++++++++++++++++++++++++++++++++++++');
