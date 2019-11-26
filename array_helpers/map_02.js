/**
 * Example with property
 */
var cars = [
    { model: 'Lancer', price: '28000'},
    { model: 'Gol', price: '19000'}
];

var prices = cars.map((car) => {
    return car.price;
});


/**
 * Implementation of pluck with map
 */
function pluck(array, property) {
    return array.map((value) => {
        return value[property];
    });
}

console.log(pluck(cars, price));
