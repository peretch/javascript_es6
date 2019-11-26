/**
 * With template strings, we can use "`" character
 * Calling variables as ${variableName}
 * Or calling function as ${function}
 */
function getMessage(){
    // const year = new Date().getFullYear();
    // return `The year is ${year}`;

    return `The year is ${new Date().getFullYear()}`;
}

console.log(getMessage());