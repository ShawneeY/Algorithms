var dailyTemperatures = function(T) {
    
    // [73, 74, 75, 71, 69, 72, 76, 73]
    // stack 栈
    
    // [1, 1，4，2，1, 1, 0, 0]
    
    // [73]
    // [73]  74 -> [74]
    // [74]  75 -> [75]
    // [75]  71 -> [75,71]
    // [75,71] 69 -> [75,71,69]
    // [75,71,69] 72 -> [75,71] 72
    // [75,71] 72 -> [75,72]
    // [75,72] 76 -> [75] 76
    // [75] 76    -> [76]
    // [76] 73    -> [76,73]
    // [76,73]
    
    // 1. 如果栈顶元素大于当前要push的元素，可以push
    // 2. 否则记录当前元素就是目标值，然后pop栈顶元素，push当前元素
   
     var stack = [0];
     var outcome = [];
     var target;
     for (var i = 1; i<T.length; i++){
         var curr = T[i];
         var pop = stack[stack.length-1];
         // 把当前元素跟stack里面所有的比, worst: o(n*(n-1))
         //eg.[1,1,1,1,1,1,1,1,2]
         while(stack.length!==0 && curr > T[pop]){
             stack.pop();
             var diff = i - pop;
             outcome[pop] = diff; 
             pop = stack[stack.length-1];
         }
 
         stack.push(i)
     }
     
     //剩下的都是一个比一个小直到arr空
     for(var i = 0; i<stack.length; i++){
         outcome[stack[i]] = 0
     }
     return outcome;
 };