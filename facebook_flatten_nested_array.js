// [[[[3],4],5,6],8,9]

// [3,4,5,6,8,9]

// function flatten(array){
//   let i;
//   let placeholder = [array];
//   let lastIndex = [-1];
//   let result = [];
//   while(placeholder.length > 0){
//     let curr = placeholder.pop(); // O(1)
//     i = lastIndex.pop() + 1;
//     for(; i < curr.length; ++i){
//       if(Array.isArray(curr[i])){
//         placeholder.push(curr);
//         lastIndex.push(i)
//         curr = curr[i];
//         i = i-1;
//       }else {
//         result.push(curr[i])
//       }
//     }
//   }
//   return result;
// }
//  0,1,2
// [1,2,3]

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
