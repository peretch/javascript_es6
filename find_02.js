function Car(model){
    this.model = model;
}

var cars = [
    new Car('Mustang'),
    new Car('Gol'),
    new Car('Lancer')
];

var car = cars.find((car) => {
    return car.model === 'Gol';
});

console.log(car);