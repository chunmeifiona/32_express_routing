function average(arr) {
    return arr.reduce((p, c) => p + c) / arr.length;
}

function midpoint(numArr) {
    const numArrSorted = numArr.sort();
    let median;
    let index = Math.floor(numArrSorted.length / 2)
    if (numArrSorted.length % 2 === 1) {
        median = numArrSorted[index];
    }
    else {
        median = (numArrSorted[index] + numArrSorted[index - 1]) / 2;
    }
    return median;
}


function mostFrequent(numArr) {
    const numMap = new Map();

    numArr.forEach(v => {
        if (numMap.has(v)) {
            let newvalue = numMap.get(v) + 1;
            numMap.set(v, newvalue);
        } else
            numMap.set(v, 1);
    })

    let maxkey = numArr[0];
    numMap.forEach((v, k) => {
        if (v > numMap.get(maxkey))
            maxkey = k;
    })
    return maxkey;
}

module.exports = { average, midpoint, mostFrequent };