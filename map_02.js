// Map second example
var cars = [
    { model: 'Lancer', price: '28000'},
    { model: 'Gol', price: '19000'}
];

var prices = cars.map((car) => {
    return car.price;
})

console.log(prices);