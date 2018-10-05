import createSet from './createSet'
import getPowerSet from './powerSet'
import getProductOfSet from './calculateProductOfASet'
import isAPerfectSquare from './isAPerfectSquare'

/**
 * Find the number of subsets whose product is a perfect square
 * 
 * @param {number} start 
 * @param {number} stop 
 * @returns {number} length of set of subsets who product is a perfect square
 */
const numberOfPerfectSquareSubSets = (start, stop) => {
    let set = createSet(start, stop)
    let powerSet = getPowerSet(set)

    let perfectSquareSubSets = powerSet.reduce((arr, subset) => {
        let setProduct = getProductOfSet(subset)

        return isAPerfectSquare(setProduct) ? [...arr, subset] : [...arr]
    }, [])

    return perfectSquareSubSets.length
}

export default numberOfPerfectSquareSubSets