const validateValue = require('./validateValue');


describe('validateValue', () => {
    test('Correct value', () => {
        expect(validateValue(50)).toBe(true);
    })
    test('Less than correct', () => {
        expect(validateValue(-1)).toBe(false);
    })
    test('More than correct', () => {
        expect(validateValue(101)).toBe(false);
    })
    test('Upper limit value', () => {
        expect(validateValue(100)).toBe(true);
    })
    test('Bottom limit value', () => {
        expect(validateValue(0)).toBe(true);
    })
})