const products = [
    { name: 'banana', type: 'fruit', quantity: 5, price: 5 },
    { name: 'onion', type: 'vegetable', quantity: 10, price: 20 },
    { name: 'apple', type: 'fruit', quantity: 15, price: 45 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 10 },
    { name: 'carrot', type: 'vegetable', quantity: 15, price: 20 }
];

var vegetables = products.filter((product) => {
    return product.type === 'vegetable';
});

console.log(vegetables);

// vegetables, with lower cost than 15, and quantity > 10
// Expected: celery
var filtered = products.filter((product) => {
    return product.type === 'vegetable' 
        && product.quantity > 10 
        && product.price < 15;
});

console.log(filtered);