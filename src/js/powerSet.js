/**
 * Calculate the power set of a given set of numbers
 * 
 * @param {number[]} set 
 * @returns {[number[]]} ps
 */
const powerSet = set => {
    let ps = [
        []
    ]

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