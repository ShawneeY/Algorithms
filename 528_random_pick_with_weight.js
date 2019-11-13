
var Solution = function(w) {
    this.weight = w;
    var sortedArr = this.weight.sort(function(a,b){return a-b});
    this.porpotionArr = [];
    this.sum = 0;
    for(var i = 0 ; i<sortedArr.length; i++){
        this.sum = this.sum+sortedArr[i];
        this.porpotionArr.push(this.sum);
    }
};


Solution.prototype.pickIndex = function() {
    var porpotionArr = this.porpotionArr;
    var random = parseInt(Math.random() * this.sum);
   
    var s = 0;
    var e = porpotionArr.length;

    while(s<e){
        var m = s + Math.floor((e-s)/2);
         //[1,4,11,25]
        var mv = porpotionArr[m];
        console.log(random, mv, m)
        if(random ===mv){
            return m;
        }else if(random < mv){
            e = m;
        }else {
            s = s + 1;
        }
    }

    return s;
     
};