import hasValidMembers from "./internal/hasValidMembers";

/**
 * Calculate the power set of a given set of numbers
 * Note: the empty set is a subset of every set
 * 
 * @see {@link https://www.ics.uci.edu/~alspaugh/cls/shr/powerset.html}
 * 
 * @param {number[]} set 
 * @returns {[number[]]} ps
 */
const powerSet = set => {

    // The empty set here is depicted as an empty array
    let ps = [
        []
    ]

    if (undefined === set || !(set instanceof Array) || 0 === set.length) {
        return ps
    }

    if (!hasValidMembers(set)) {
        return ps
    }

    set.forEach((v) => {
        var len = ps.length

        for (let j = 0; j < len; j++) {
            let n = ps[j] ? [...ps[j], v] : v
            ps = [...ps, ...[n]]
        }
    })

    return ps
}


export default powerSet