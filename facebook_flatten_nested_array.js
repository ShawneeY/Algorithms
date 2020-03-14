// [[[[3],4],5,6],8,9]

// [3,4,5,6,8,9]


function flatten(array) {
  let result = [];
  while (array.length > 0) {
    const element = array.shift(); // O(n)
    if (Array.isArray(element)) {
      array = elemet.concat(array);
    } else {
      result.push(element);
    }
  }

  return result;
}

const result = flatten([[[[3],4],5,6],8,9]);
console.log(result); 
