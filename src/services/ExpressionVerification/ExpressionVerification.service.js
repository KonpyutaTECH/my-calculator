/*
* Take automaticly valid string expression in arguments and a string of the last key pressed
* Test if the last key pressed can be adde to the expression
* Only key of the calculator can be added
* return true if can be added
* return false if this is an operator and can replace the last caracter of the expression (operator too)
* undefined if can't do both
*/

export const canBeAdd = (expression,keyValue) =>{        
    var operators = ["*","/","-","+","="];
    var correctKeys = "0123456789/*-+=.";
    if(correctKeys.indexOf(keyValue)!==-1){
        if(operators.includes(keyValue)){
            if(expression!==""){
                if(!operators.includes(expression[expression.length-1])){                        
                    return true;
                }else{
                    if(keyValue!=="-"){
                        if(expression.length>1 & !operators.includes(expression[expression.length-2])){
                            return false;
                        }
                    }else{
                        if(expression[expression.length-1]==="*" | expression[expression.length-1]==="/"){
                            return true;
                        }
                        else{
                            return false
                        }
                    }
                }
            }else{
                if(keyValue==="-"){
                    return true;
                }
            }
        }else{
            return true
        }
    }
    
}