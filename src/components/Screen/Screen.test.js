import Screen from './Screen.js'
import { render, screen} from '@testing-library/react'
 
describe('Screen show expression with correct caracters and spaces', () => {
    test('Should render without crash', async () => {
        render(<Screen expression="5*6/3+1-2" lastexpression=""></Screen>)
        const linkElement = screen.getByDisplayValue('5 × 6 ÷ 3 + 1 - 2');
        expect(linkElement).toBeInTheDocument();
    })
})

describe('Screen show 0 with empty expression', () => {
    test('Should render without crash', async () => {
        render(<Screen expression="" lastexpression=""></Screen>)
        const linkElement = screen.getByDisplayValue('0');
        expect(linkElement).toBeInTheDocument();
    })
})

describe('Screen show result with last expression', () => {
    test('Should render without crash', async () => {
        render(<Screen expression="9" lastexpression="5*6/3+1-2"></Screen>)
        const linkElement = screen.getByText('5 × 6 ÷ 3 + 1 - 2');
        expect(linkElement).toBeInTheDocument();
    })
})