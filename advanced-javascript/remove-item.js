const items = ['a', 'b', 'c', 'z', 'm'];

/**
 * Removing item mutating the array
 * @param  {String[]} items
 * @param  {String} removable
 */
function removeItemWithSplice(items, removable) {
  const index = items.indexOf(removable);
  items.splice(index, 1);
  return items;
}

/**
 * Removing item without mutating the array
 * @param  {String[]} items
 * @param  {String} removable
 */
function removeItemWithSlice(items, removable) {
  const index = items.indexOf(removable);
  return items.slice(0, index).concat(items.slice(index + 1));
}

/**
 * Removing item without mutating the array with spread
 * @param  {String[]} items
 * @param  {String} removable
 */
function removeItemWithSliceAndSpread(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

console.log('+++++++++++++++++++++++++++++++++++++++++++');
console.log(removeItemWithSplice([...items], 'c'));
console.log(removeItemWithSlice([...items], 'c'));
console.log(removeItemWithSliceAndSpread([...items], 'c'));
console.log('+++++++++++++++++++++++++++++++++++++++++++');
