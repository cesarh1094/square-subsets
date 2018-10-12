import productOfASet from '../src/js/calculateProductOfASet'

describe('Testing `productOfASet` function', () => {
    it('Return 0', () => {
        let p = productOfASet([])

        expect(p).toBe(0)
    })

    it('Return 0', () => {
        let p = productOfASet('')

        expect(p).toBe(0)
    })

    it('Return 0', () => {
        let p = productOfASet(5)

        expect(p).toBe(0)
    })

    it('Return 0', ()=>{
        let p = productOfASet(undefined)

        expect(p).toBe(0)
    })
})