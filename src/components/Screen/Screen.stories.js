import React from 'react';

import Screen from './Screen.js';

export default {
    /* ๐
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * Screen Component
    * Show expression and result
    * Replace * by ร
    * Replace / by รท
    * Add spaces between operators and numbers
    */
    title: 'Screen',
    component: Screen
};

/* ๐
* Complex expression
* Show 5 ร 6 รท 3 + 1 - 2
*/
export const Primary = () => <Screen expression="5*6/3+1-2" lastexpression=""></Screen>;  

/* ๐
* Empty expression
* Show 0
*/
export const Secondary = () => <Screen expression="" lastexpression=""></Screen>;  

/* ๐
* Show result of 5*6/3+1-2
* Show the expression and keep it for the next expression
*/
export const Result = () => <Screen expression="9" lastexpression="5*6/3+1-2"></Screen>; 

