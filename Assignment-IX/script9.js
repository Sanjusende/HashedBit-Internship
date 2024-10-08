// Q:9.........................................................................................................................
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

function mergeObjects(o1, o2) {
  return Object.assign({}, o1, o2);  
}

console.log(mergeObjects(obj1, obj2));
