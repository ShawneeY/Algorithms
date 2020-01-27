/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    
    // find all posibilities of changing one letter in beginword in every position.
    // 26 * beginWord.length 

    let dict = new Set(wordList);
    if(!dict.has(endWord)){
        return 0;
    }
    
    let result = 1;
    let queue = [beginWord];
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    while(queue.length > 0){
        let length = queue.length;
        
        for(let i = 0; i < length; i++){
            let curr = queue.shift();
            if(curr === endWord){
                return result;
            }
            for(let j = 0; j < curr.length; j++){
                 for(let l of alphabet){
                    let newWord = curr.slice(0,j) + l + curr.slice(j+1);
                    if(dict.has(newWord)){
                        dict.delete(newWord);
                        queue.push(newWord);
                    }
                }
            }
           
        }
        
        result++
    }
    return 0;
};