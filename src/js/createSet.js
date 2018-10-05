/**
 * Creates a 'set' (an array of numbers) from start and stop values
 * 
 * @param {number} start 
 * @param {number} stop 
 * @returns {Array} arr
 */
const createSet = (start, stop) => {
    let arr = []

    if ('number' !== typeof (start) || 'number' !== typeof (stop)) {
        return arr
    }

    if (stop < start) {
        let tmp = start
        start = stop
        stop = tmp
    }

    for (; start <= stop; start++) {
        arr.push(start)
    }

    return arr
}

export default createSet