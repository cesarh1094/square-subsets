import hasValidMembers from './internal/hasValidMembers'

/**
 * Calculate the product of a set of numbers
 * 
 * @param {number[]} set 
 * @returns {number} product
 */
const calculateProductOfASet = set => {
    if (!set || !(set instanceof Array) || 0 === set.length) {
        console.error("A set must be a valid array of length > 0")
        return 0
    }

    if (!hasValidMembers(set)) {
        console.error("Every member of the set must be a number")
        return 0
    }

    let product = 1

    set.forEach((v) => {
        product *= v
    })

    return product
}

export default calculateProductOfASet