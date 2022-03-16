import { Component } from 'react';
import './Screen.css';

class Screen extends Component {

    render() {

        var expression = this.props.expression;
        expression = expression.toString().replaceAll("*", " \u00d7 ");
        expression = expression.toString().replaceAll("/", " \u00f7 ");
        expression = expression.toString().replaceAll("+", " + ");
        expression = expression.toString().replaceAll("-", " - ");
        if(expression===""){
            expression = "0";
        }
        
        var lastexpression = this.props.lastexpression;
        lastexpression = lastexpression.toString().replaceAll("*", " \u00d7 ");
        lastexpression = lastexpression.toString().replaceAll("/", " \u00f7 ");
        lastexpression = lastexpression.toString().replaceAll("+", " + ");
        lastexpression = lastexpression.toString().replaceAll("-", " - ");

        return(
            <div className='screen'>
                <div className='double-screen'>                    
                    <span className='last-expression-field'>{lastexpression}</span>
                    <input name="screen" type="text" className='calcul-field' value={expression} readOnly/> 
                </div>
            </div>
                                 
        );
    }  
}


export default Screen;