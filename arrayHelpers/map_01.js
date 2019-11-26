// Map basic example
var numbers = [1,2,3];

// Why new array and dont edit "numbers" directly?
// Convention, in larges project, is easy to get confused changing arrays values that you can use later.
var doubleNunmbers = [];

// Example: We want to save the same array, but with the double value
// Example with 'for'
for(var i = 0; i < numbers.length; i++){
    doubleNunmbers.push(numbers[i] * 2);
}
console.log(doubleNunmbers);

// Example with 'map'
var doubled = numbers.map((number) => {
    // if you don't declare a return call, the array "doubled" will be populated with "undefined" value
    return number * 2;
});
console.log(doubled);