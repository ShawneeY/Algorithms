/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {

    let startCities = new Set();

    for (let i = 0; i < paths.length; i++) {
        let curr = paths[i];
        startCities.add(curr[0]);
    }

    for (let i = 0; i < paths.length; i++) {
        let curr = paths[i];
        if (!startCities.has(curr[1])) {
            return curr[1];
        }
    }
};