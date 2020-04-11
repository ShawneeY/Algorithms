/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function (A, B) {
    if (A.length === 0 && B.length === 0) {
        return [];
    }
    const results = [];
    for (let i = 0; i < A.length; i++) {

        let arrA = [];
        for (let j = 0; j < A[0].length; j++) {
            arrA.push(A[i][j]);
        }


        let result = [];
        for (let i1 = 0; i1 < B[0].length; i1++) {
            let sum = 0;
            for (let j1 = 0; j1 < B.length; j1++) {
                let a = arrA[j1];
                let b = B[j1][i1];
                if (a !== 0 && b !== 0) {
                    sum = sum + a * b;
                }

            }
            result.push(sum);
        }
        results.push(result);
    }
    return results
};