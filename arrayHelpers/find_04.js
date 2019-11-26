const ladders = [
    { id: 1, height: 20 },
    { id: 2, height: 30 }
];

const criteria = { height: 30 };

function findWhere(array, criteria) {
    return array.find((obj) => {
       return obj[Object.keys(criteria)[0]] === criteria[Object.keys(criteria)[0]];
    });
}

var ladder = findWhere(ladders, criteria);

console.log(ladder);