import React from 'react';

import Button from './Button.js';
import Calculator from '../../components/Calculator/Calculator.js'

export default {
    /* 👇
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * Component of a simple calculator key
    * Return their own value on click
    */
    title: 'Button',
    component: Button
};

const cal = new Calculator();

/* 👇
* Number or . key on calculator with corresponding style of number
* 
*/
export const Primary = () => <Button styleClass="number key" key="6" value="6" updateClickHandler={cal.updateExpression.bind(cal,"6")}/>;  

/* 👇
* Operator key on calculator with corresponding style of operator
* 
*/
export const Secondary = () => <Button styleClass="operator key" key="*" value="*" updateClickHandler={cal.updateExpression.bind(cal,"*")}/>;  

/* 👇
* Enter key on calculator with corresponding style of =
* 
*/
export const Enter = () => <Button styleClass="enter key" key="=" value="=" updateClickHandler={cal.updateExpression.bind(cal,"=")}/>;  

/* 👇
* DEL or AC key on calculator with corresponding style
* 
*/
export const DEL = () => <Button styleClass="operator del key" key="DEL" value="DEL" updateClickHandler={cal.updateExpression.bind(cal,"DEL")}/>; 