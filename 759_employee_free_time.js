// 不跳坑 不多想
// 假设这是一个人的排班表
// 按开始时间排序然后merge
// 找空档
var employeeFreeTime = function(schedule){
    if(schedule.length === 0) {
        return [];
    }
    var flat = [];
    for(var i = 0; i<schedule.length; i++){
        var e = schedule[i];
        for(var j = 0; j<e.length; j++){
            flat.push(e[j]);
        }
    }
    var sorted = flat.sort(function(a,b){return a.start-b.start});
    
    var merged = [sorted[0]];
  
    
      for(var i = 0; i<sorted.length; i++){
        var curr = sorted[i];
        var m = merged[merged.length - 1];
        
        if(curr.start <= m.end){
            m.end = Math.max(curr.end, m.end);
        }else {
            merged.push(curr);
        }
      }
      var common = [];
      for(var i = 0; i<merged.length; i++){
          if(merged[i+1]){
             common.push({start: merged[i].end, end:merged[i+1].start });
          }
      }
      return common;
}