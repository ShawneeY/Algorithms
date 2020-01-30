/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    
    if(t.length < 1){
        return '';
    }
    
    const tmap = new Map();
    for(let i = 0; i < t.length; i++){
        let count = tmap.get(t[i]) || 0;
        if(tmap.has(t[i])){
            tmap.set(t[i], count+1);
        }else {
            tmap.set(t[i], 1);
        }
    }
    
    
    
    let length = 0;
    let start = 0;
    let end = 0
    let tLength = t.length;
    let minLength = s.length;
    let result = '';

    while(start <= s.length-1 && s.slice(start).length >= tLength){
        let map =  new Map(tmap);

        for(let i = 0; i < s.slice(start).length; i++){
            let index = start + i
            end = index;

            if(map.has(s[index])){
               let count = map.get(s[index])
               if(count > 1){
                   map.set(s[index], count-1);
               }else {
                   map.delete(s[index]);
               }
            }
            
            if(map.size === 0){
                let substring = s.slice(start, end+1);

                if(substring.length <= minLength && substring.length >= t.length){
                    
                    result = substring;
                    minLength = substring.length;
                }
                
            }

        }
        start++
    }
     
    
    return result
}
    
