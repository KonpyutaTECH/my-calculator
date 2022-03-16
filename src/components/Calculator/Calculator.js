import React, { Component } from 'react';
import Button from '../Button/Button.js';
import Screen from '../Screen/Screen.js';
import {getResult,getCanBeAdd} from '../../services/index.js';
import './Calculator.css';


class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            lastExpression: "",
            expression: "",
            keys: [{keyValue:"7",style:"number key"},{keyValue:"8",style:"number key"},{keyValue:"9",style:"number key"},{keyValue:"/",style:"operator key"},{keyValue:"4",style:"number key"},{keyValue:"5",style:"number key"},{keyValue:"6",style:"number key"},{keyValue:"*",style:"operator key"},{keyValue:"1",style:"number key"},{keyValue:"2",style:"number key"},{keyValue:"3",style:"number key"},{keyValue:"-",style:"operator key"},{keyValue:"0",style:"number key"},{keyValue:".",style:"number key"},{keyValue:"=",style:"enter key"},{keyValue:"+",style:"operator key"},{keyValue:"DEL",style:"operator del key"},{keyValue:"AC",style:"operator refresh key"}] 
        };
    }

    keyDownEvent(keyValue) {
        this.updateExpression(keyValue);
    };

    componentDidMount() {
        window.addEventListener('keydown', (event) => {
            this.keyDownEvent(event.key)
        });
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', (event) => {
            this.keyDownEvent(event.key)
        });
    }    

    updateExpression = (keyValue) => {      
        if(keyValue==="Backspace" | keyValue==="DEL"){
            this.setState({expression: this.state.expression.slice(0,-1)});  
        }
        else if(keyValue==="AC"){
            this.setState({expression: ""});  
        }
        else if(keyValue==="=" | keyValue==="Enter"){
            this.setState({lastExpression: this.state.expression, expression: getResult(this.state.expression)});
        }
        else{
            var canBeAddtoExpression = getCanBeAdd(this.state.expression,keyValue);
            if(canBeAddtoExpression===true){
                this.setState({expression: this.state.expression+keyValue});
            }else if(canBeAddtoExpression===false){
                this.setState({expression: this.state.expression.slice(0,-1)+keyValue});
            }
        }   
    }
    render() {
        const expression = this.state.expression;
        const lastexpression = this.state.lastExpression;
        return(
            <div className='calculator'>
                <Screen expression={expression} lastexpression={lastexpression}></Screen>
                {this.state.keys.map(key => (
                    <Button styleClass={key.style} key={key.keyValue} value={key.keyValue} updateClickHandler={this.updateExpression.bind(this,key.keyValue)}></Button>
                ))}
            </div>
                      
        );
    }  
}


export default Calculator;