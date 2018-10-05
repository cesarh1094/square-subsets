/**
 * Calculate the product of a set of numbers
 * 
 * @param {number[]} set 
 * @returns {number} product
 */
const calculateProductOfASet = (set) => {
    if (undefined == set || 0 === set.length || !set instanceof Array) {
        return 0
    }

    let product = 1

    set.forEach((v) => {
        product *= v
    })

    return product
}

export default calculateProductOfASet