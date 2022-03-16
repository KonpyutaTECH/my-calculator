import Button from './Button.js'
import { render, screen } from '@testing-library/react'
import Calculator from '../../components/Calculator/Calculator.js'

describe('Button with click handler', () => {
    test('Should render without crash', async () => {
        const cal = new Calculator();
        render(<Button styleClass="number key" key="6" value="6" updateClickHandler={cal.updateExpression.bind(cal,"6")}/>)
        const linkElement = screen.getByText(/6/i);
        expect(linkElement).toBeInTheDocument();
    })
})