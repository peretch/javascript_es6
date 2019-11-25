/**
 * In this example, we are going to make a function to find out
 * if a computer can run a program thats need at least 16 GB or RAM
 */
var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Panavox', ram: 8 },
    { name: 'Acer', ram: 32 },
];

/**
 * Example with loop for
 */
// var allComputersCanRunProgram = true;
// var someComputersCanRunProgram = false;

// for (let i = 0; i < computers.length; i++) {
//     const computer = array[i];

//     if(computer.ram < 16){
//         allComputersCanRunProgram = false;
//     }else{
//         someComputersCanRunProgram = true;
//     }   
// }

/**
 * Example with "every" and "some"
 */

var allComputersCanRunProgram = computers.every((computer) => {
    return computer.ram >= 16;
})

var someComputersCanRunProgram = computers.some((computer) => {
    return computer.ram >= 16;
})

console.log(allComputersCanRunProgram);
console.log(someComputersCanRunProgram);