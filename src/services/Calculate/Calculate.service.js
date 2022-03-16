/*
* Take automaticaly valid string expression in arguments
* Split expression by operators in array
* For + and -, operator stay with the next number
* Calculate all * and /
* Then, when there is no mor * and /, add all positive and negative numbers together
* return float result
*
*/

export const calculateExpression = (expression) => {
    expression=expression.toString().replaceAll("*"," * ");
    expression=expression.toString().replaceAll("/"," / ");
    expression=expression.toString().replaceAll("-"," -");
    expression=expression.toString().replaceAll("+"," +");
    expression=expression.toString().replaceAll("  "," ");
    var splitExpression = expression.split(" ");
    var x;
    var z;
    var result=0;
    while(splitExpression.indexOf("/")!==-1){
        x = splitExpression.indexOf("/");   
        z = parseFloat(splitExpression[x-1])/parseFloat(splitExpression[x+1]);
        splitExpression[x-1]=z;
        splitExpression.splice(x,2);
    }
    while(splitExpression.indexOf("*")!==-1){
        x = splitExpression.indexOf("*");   
        z = parseFloat(splitExpression[x-1])*parseFloat(splitExpression[x+1]);
        splitExpression[x-1]=z;
        splitExpression.splice(x,2);
    }
    for(let i = 0; i<splitExpression.length; i++){
        if(splitExpression[i]!==""){            
            result+=parseFloat(splitExpression[i]);
        }
    }
    return result;
}