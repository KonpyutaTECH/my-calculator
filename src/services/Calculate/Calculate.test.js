import { calculateExpression } from './Calculate.service.js'
 
describe('Calcul expresion with all operators', () => {
    test('Should return true', async () => {
        expect(calculateExpression("5*6/3+1.5-2")).toBe(9.5);
    })
})

describe('Simple number', () => {
    test('Should return true', async () => {
        expect(calculateExpression("3.14159265359")).toBe(3.14159265359);
    })
})