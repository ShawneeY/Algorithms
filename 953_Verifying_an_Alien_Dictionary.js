/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    // edge case 

    // map words
    // compare words char by char
    // find the first 


    const map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order.charAt(i), i);
    }

    const isRightOrder = (w1, w2) => {
        let length = Math.min(w1.length, w2.length);

        for (let i = 0; i < length; i++) {
            let char1 = w1.charAt(i);
            let char2 = w2.charAt(i);

            let index1 = map.get(char1);
            let index2 = map.get(char2);

            if (index1 === index2) continue;
            return index1 < index2;

        }

        return w1.length < w2.length;
    }


    for (let i = 0; i < words.length - 1; i++) {
        let curr = words[i];
        let next = words[i + 1];

        if (!isRightOrder(curr, next)) {
            return false;
        }
    }

    return true;
};