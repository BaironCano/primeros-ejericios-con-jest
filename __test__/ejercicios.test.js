const {createPhoneNumber, sumaElementos, objectsCompare} = require('../src/ejercicios con jest');

describe('creatPhoneNumber validations', () => {
    test('Check that the array is undefined', () => { 
        expect(createPhoneNumber()).toBeUndefined()
    })

    test('Check that the array is empty', () => { 
        expect(createPhoneNumber([])).toBe('Empty array')
    })

    test('Check array length', () => { 
        expect(createPhoneNumber([1])).toBe('Insufficient numbers in the array')
    })

    test('Check array elements within range', () => { 
        expect(createPhoneNumber([-1, 2, 3, 4, 5, 54, 45, 10, -4, -5])).toBe('Array with elements out of range')
    })

    test('Check the output of the array', () => { 
        expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe("(123) 456-7890")
    })
})

describe('sumaElementos validations', () => {
    test('Check that the array is undefined', () => { 
        expect(sumaElementos()).toBeUndefined()
    })

    test('Check the type of argument', () => { 
        expect(sumaElementos('hello')).toBe('Wrong type of argument')
    })

    test('Check array length', () => { 
        expect(sumaElementos([1, 1, 1])).toBe(3)
    })
})

describe('objectsCompare validations', () => {
    test('Check that the objects are undefined', () => { 
        expect(objectsCompare()).toBeUndefined()
    })

    test('Check objects length', () => { 
        expect(objectsCompare({nombre: 'juan', apellido: 'osorio'}, {nombre: 'jose'})).toBeFalsy()
    })

    test('Check the content of objects', () => { 
        expect(objectsCompare({nombre: 'juan'}, {nombre: 'diego'})).toBeFalsy()
    })

    test('Check that the objects are equal', () => { 
        expect(objectsCompare({nombre: 'juan'}, {nombre: 'juan'})).toBeTruthy()
    })
})