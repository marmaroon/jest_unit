const mapArrToStrings = require('./mapArrToStrings.js')

describe('mapArrToStrings', () => {
    test('Correct value', () => {
        expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('Mixed array', () => {
        expect(mapArrToStrings([1, 2, 3, null, undefined, 'qwerty'])).toEqual(['1', '2', '3']);
    })
    test('Empty array', () => {
        expect(mapArrToStrings([])).toEqual([]);
    })
    test('Negation', () => {
        expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3','4']);
    })
})

//toBe используем если хотим определить что один объект равен другому
//toEqual используем если хотим сравнить содержимое этих объектов
