function mutate(array, indexes) {
  const swap = (i, j) => {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;

    tmp = indexes[i];
    indexes[i] = indexes[j];
    indexes[j] = tmp; 
  }

  for(let i = 0; i < indexes.length; i++) {
    while(indexes[i] != i) {
      swap(i, indexes[i]);
      console.log(i, array, indexes);
    }
  }
  
  return array;
}

let array = [1,2,3,4,5]; // [0,1,2,3,4]
let indexes = [2,1,4,3,0];

/*
[3,2,1,4,5]
[4,1,2,3,0]





*/

const mutated = mutate(array, indexes);

console.log(mutated); // [5,2,1,4,3]

