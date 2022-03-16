import { canBeAdd } from './ExpressionVerification.service.js'
 
describe('Add multiplication operator after empty exrpession', () => {
    test('Should return undefined', async () => {
        expect(canBeAdd("","*")).toBe(undefined);
    })
})

describe('Add substract operator after empty exrpession', () => {
    test('Should return true', async () => {
        expect(canBeAdd("","-")).toBe(true);
    })
})

describe('Add number after empty exrpession', () => {
    test('Should return true', async () => {
        expect(canBeAdd("","8")).toBe(true);
    })
})

describe('Add wrong key after exrpession', () => {
    test('Should return undefined', async () => {
        expect(canBeAdd("8*9","a")).toBe(undefined);
    })
})

describe('Add operator key after number', () => {
    test('Should return true', async () => {
        expect(canBeAdd("8*9","+")).toBe(true);
    })
})

describe('Add number key after operator', () => {
    test('Should return true', async () => {
        expect(canBeAdd("8*","9")).toBe(true);
    })
})

describe('Replace operator with an operator (not -)', () => {
    test('Should return false', async () => {
        expect(canBeAdd("8*","+")).toBe(false);
    })
})

describe('Add - after an * or /', () => {
    test('Should return true', async () => {
        expect(canBeAdd("8*","-")).toBe(true);
    })
})

describe('Replace + by -', () => {
    test('Should return false', async () => {
        expect(canBeAdd("8+","-")).toBe(false);
    })
})

