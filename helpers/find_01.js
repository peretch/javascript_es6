const users = [
    { name: "Jaci", age: 26, gender: 'm' },
    { name: "Diego", age: 27 , gender: 'm' },
    { name: "Lucas", age: 26, gender: 'm' },
    { name: "Caro", age: 25, gender: 'm' },
    { name: "Diego", age: 56 , gender: 'm' }
];

// Stop with the first coincidence
var user = users.find((user) => {
    return user.name === 'Diego';
});

console.log(user);