// You are given an array of N elements in the form 
// "property1: value1; property2: value2;...;propertyX: valueX;" 
// for some some N and any X. 
// There is also another array of M elements of the form "property: value". 
// You are supposed to write an algorithm to remove every element in the N length array that has a 
// "property: value" pair in the M length array


const arr1 = [
    {
        'name': 'Allan',
        'age': 44,
        'sex': 'male',
        'city': 'Lanzhou',
        'height': 190
    },
    {
        'name': 'XiaoYu',
        'age': 88,
        'sex': 'feamle',
        'city': 'GGGG',
        'height': 120
    }
]


const arr2 = [
    {'name': 'Al'},
    {'city': 'GGGG'}
]

const findMatch = obj => {
    return !!Object.entries(obj).find(entry => {
      let key = entry[0];
      let value = entry[1];
      return !!arr2.find(a2 => a2[key] === value)
    })
}

const deleteMatch = index => {
  let tmp = arr1[index];
  let last = arr1[arr1.length - 1];
  arr1[index] = last;
  arr1[arr1.length - 1] = tmp;
  arr1.pop();
}

for(let i = 0; i < arr1.length; i++){
    let obj = arr1[i];
    if(findMatch(obj)){
      deleteMatch(i);
      i--
    } 
}

console.log(arr1);