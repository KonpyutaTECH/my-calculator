import {calculateExpression} from './Calculate/Calculate.service.js';
import {canBeAdd} from './ExpressionVerification/ExpressionVerification.service.js';

export const getResult = (expression) => {        
    return calculateExpression(expression);
}

export const getCanBeAdd = (expression,keyValue) => {        
    return canBeAdd(expression,keyValue);
}