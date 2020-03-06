// You are given an array of N elements in the form 
// "property1: value1; property2: value2;...;propertyX: valueX;" 
// for some some N and any X. 
// There is also another array of M elements of the form "property: value". 
// You are supposed to write an algorithm to remove every element in the N length array that has a 
// "property: value" pair in the M length array


function removeElement(l1, l2){
  function swap(i, arr){
     let tmp = arr[i];
     arr[i] = arr[arr.length - 1];
     arr[arr.length - 1] = tmp;
  }
  const obj2 = {};
  for(let i = 0; i < l2.length; i++){
    for(const key of Object.keys(l2[i])){
      
      (obj2[key] || (obj2[key] = [])).push(l2[i][key])
    }
  }
  for(let i = 0; i < l1.length; i++){
    let curr1 = l1[i];
    const keys = Object.keys(obj2);
    for(let key of keys){
      if(obj2[key].includes(curr1[key])){
        swap(i,l1);
        l1.pop()
      }
    }
  }
}

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
    {'name': 'Allan'},
    {'city': 'xian'}
]

// {
//   'key': [v1,v2]
// }

const arr3 = [
    {'name': 'XiaoYu'},
    {'city': 'Lanzhou'}
]

removeElement(arr1, arr2);
console.log(arr1)
