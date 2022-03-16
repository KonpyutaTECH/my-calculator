import React from 'react';

import Calculator from './Calculator.js';

export default {
    /* 👇
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * 
    */
    title: 'Calculator',
    component: Calculator
};

/* 👇
* Calculator component, contain button and screen components
* Generate a calculator with an array of all number and orperator of a simple calculator
* Use Calculate service to calculate an expression from string
* Use Expression Verification Service to check if last key press can be add to expression, replace last key or not
* If Bachspace or DEL press, del last key of the expression
* If AC press, del all the expression
* If = or enter press, calculate and show the result
* Can be controlled by physic keyboard or with buttons of the application
*/
export const Primary = () => <Calculator></Calculator>;  