/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
    if (A.length === 0 || B.length === 0) {
        return [];
    }

    let index1 = 0;
    let index2 = 0;
    let result = [];
    while (index1 < A.length && index2 < B.length) {
        let interval1 = A[index1];
        let interval2 = B[index2];

        let left = Math.max(interval1[0], interval2[0]);
        let right = Math.min(interval1[1], interval2[1]);

        let leftMax = Math.max(interval1[0], interval2[0]);
        let rightMin = Math.min(interval1[1], interval2[1])

        if (leftMax <= rightMin) {
            result.push([left, right]);
        }
        if (interval1[1] === rightMin) {
            index1++
        } else {
            index2++
        }
    }

    return result;
};