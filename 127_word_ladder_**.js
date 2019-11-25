var ladderLength = function(beginWord, endWord, wordList) {
    if(wordList.length === 0){
        return 0;
    }
    
    var shortestPath = 1;
    
    var map = new Map();
    
    var que = [beginWord];
    
    
    for(var i = 0; i < wordList.length; i++){
        map.set(wordList[i], 'exists');
    }
    while(que.length > 0){
        const nextBreath = [];
        for(var word of que){
            if(word === endWord){
                return shortestPath;
            }
            for(var i = 0; i < word.length; i++){
                for(var j = 0; j < 26; j++){
                    var newWord =  word.slice(0,i) +  String.fromCharCode(97 + j) + word.slice(i+1)
                    if(map.get(newWord)){
                        console.log(newWord)
                        nextBreath.push(newWord);
                        map.delete(newWord);
                    }

                }
            }
        
        }
         que = nextBreath;
         shortestPath++;
    }
    
    return 0;
   
    
};