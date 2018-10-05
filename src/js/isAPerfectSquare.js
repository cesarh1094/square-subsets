/**
 * Checks if num is a perfect square
 * 
 * @param {number} num 
 * @returns {boolean} 
 */
const isAPerfectSquare = num => {
    return (0 < num) && (0 === Math.sqrt(num) % 1)
}

export default isAPerfectSquare