/**
 * In this example, we will try to sum every element in
 * "numbers" into the array "sum".
 */
const numbers = [ 10, 20, 30];

var for_sum = 0;

/** For loop example */
for (let i = 0; i < numbers.length; i++) {
    for_sum += numbers[i];  
}

console.log(for_sum);

/**
 * The initial value "0", is set to the var "sum" 
 * number is the iterated element of the array numbers.
 */
var reduce_sum = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(reduce_sum);