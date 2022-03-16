import Calculator from './Calculator.js'
import { render, screen } from '@testing-library/react'
 
describe('Search DEL button>', () => {
    test('Should render without crash', async () => {
        render(<Calculator></Calculator>);
        const linkElement = screen.getByText(/DEL/i);
        expect(linkElement).toBeInTheDocument();
    })
})