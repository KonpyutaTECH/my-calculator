import React from 'react';

import Screen from './Screen.js';

export default {
    /* 👇
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * Screen Component
    * Show expression and result
    * Replace * by ×
    * Replace / by ÷
    * Add spaces between operators and numbers
    */
    title: 'Screen',
    component: Screen
};

/* 👇
* Complex expression
* Show 5 × 6 ÷ 3 + 1 - 2
*/
export const Primary = () => <Screen expression="5*6/3+1-2" lastexpression=""></Screen>;  

/* 👇
* Empty expression
* Show 0
*/
export const Secondary = () => <Screen expression="" lastexpression=""></Screen>;  

/* 👇
* Show result of 5*6/3+1-2
* Show the expression and keep it for the next expression
*/
export const Result = () => <Screen expression="9" lastexpression="5*6/3+1-2"></Screen>; 

