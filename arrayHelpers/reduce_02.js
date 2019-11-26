const primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
];

/**
 * acc = accumulated. Can be used "previous" also.
 * 
 * In this example, we will make an array only with the color names, using reduce.
 */
var primaryColorsStringArray = primaryColors.reduce((previous, primaryColor) => {
    previous.push(primaryColor.color);

    return previous;
}, []);

console.log(primaryColorsStringArray);