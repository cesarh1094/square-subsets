/**
 * Check if set members are all numbers
 * 
 * @param {Array} set must be a flat array of numbers
 * @returns {boolean} Returns true if all values in the set are numbers
 */
const hasValidMembers = set => {
    if (undefined === set) {
        return false
    }

    if (0 === set.length) {
        return false
    }

    for (let i = 0; i < set.length; i++) {
        if ('number' !== typeof (set[i])) {
            return false
        }
    }

    return true
}

export default hasValidMembers