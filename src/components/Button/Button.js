import { Component } from 'react';
import './Button.css';


class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            value: props.value, 
            styleClass: props.styleClass
        };
    }
    onKeyClick = () => {
        this.props.updateClickHandler();
    }
    render() {
        return(       
            <button className={this.state.styleClass} type="button" onClick={this.onKeyClick}>{this.state.value}</button>   
        );
    }  
}


export default Button;