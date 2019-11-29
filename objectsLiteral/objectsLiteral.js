/**
 * In this example, we will create a function thats
 * return an object bookshop, with two functions
 * EXAMPLE WITH ES5
 * @param {In} inventory 
 */
function createBookShop(inventory){
    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle: function(title){
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const inventory = [
{ title: 'Lord of the rings', price: 50 },
    { title: 'It', price: 25 },
    { title: 'Harry Potter', price: 40 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Harry Potter'));

/**
 * EXAMPLE WITH ES6
 */
/**
 * In this example, we will create a function thats
 * return an object bookshop, with two functions
 * EXAMPLE WITH ES6
 * @param {In} inventory 
 */
function createBookShop(inventory){
    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title){
            return this.inventory.find(book => book.title === title).price;
        }
    }
}