import createSet from '../src/js/createSet'

describe('Testing `createSet` function', () => {
    it('Return array of [1, 2, 3, 4]', () => {
        let testArr = createSet(1, 4)

        expect(testArr).toEqual([1, 2, 3, 4])
    })

    it('Return an empty array', () => {
        let tesArr = createSet('4', '5')

        expect(tesArr).toEqual([])
    })

    it('Return an empty array', () => {
        let tesArr = createSet('4', 5)

        expect(tesArr).toEqual([])
    })

    it('Return an empty array', () => {
        let tesArr = createSet(3, '5')

        expect(tesArr).toEqual([])
    })
})