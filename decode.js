// Given a grid of characters output a decoded message. The message for the following would be IROCLKA. (diagonally down right and diagonally up right if you can't go further .. you continue doing this)
// I B C A L K A
// D R F C A E A
// G H O E L A D  

const ddd = matrix => {
  let result = [];
  const m = matrix.length;
  const n = matrix[0].length;
  
  let row = 0;
  let col = 0;
  
  // 按对角线往下走
  while(row < m && col < n) {
    result.push(matrix[row][col]);
    row++;
    col++;
  }
  
  // 按对角线往上走
  while(--row >=0 && --col <= 0) {
    result.push(matrix[row][col]);
    row--;
    col--;
  }
  
  // 走到最上面之后在横着走
  while(++col < n) {
    result.push(matrix[row][col]);
  }
  
  return result;
}

// 看不懂
const decode = input => {
  //let po = [0,0];
  let result = [];
  //let count  = input[0].length;
  let x = 0;
  for(let i = 0; i < input[0].length; i++){
    if (i > input.length - 1) { // 走到了最后一行
      if (x !== 0) { // 不是第一个行
         x = i - input.length;
      }
    } else {
      x = i;
    }
    console.log(x, i);
    result.push(input[x][i]);
  }

  return result.join("");
}
  
const grid = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]

console.log(ddd(grid));
