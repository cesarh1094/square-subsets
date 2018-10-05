import hasValidMembers from '../../src/js/internal/hasValidMembers';

describe('Testing `hasValidMembers` function', () => {
    it('Return false', () => {
        expect(hasValidMembers([1, '2', 3, '4'])).toBe(false)
    })
})