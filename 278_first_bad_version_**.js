var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var versions = [];
        var version = 1
        while(version <= n){
            versions.push(version);
            version ++
        }
        var checkBadVersion = function(n, versions){
            console.log(versions)
            if(n === 1){
                return versions[0];
            }
            
            var mid = Math.floor(n/2);
            if(!isBadVersion(versions[mid-1])){
                console.log(mid, versions);
                versions = versions.splice(mid);
            }else{
               versions=versions.splice(0, mid);
            }
            return checkBadVersion(mid, versions);
            
        }
        
        return checkBadVersion(n, versions)
        
    };
};