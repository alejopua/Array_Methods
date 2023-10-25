const numbers = [1, 3, 2, 3, 4, 5, 3, 5];

const sweets = [
    { name: 'candy', color: 'red' },
    { name: 'candy', color: 'black' },
    { name: 'chocolate', color: 'brown' },
    { name: 'lollipop', color: 'green' },
    { name: 'gummy bear', color: 'yellow' },
    { name: 'caramel', color: 'orange' },
    { name: 'taffy', color: 'pink' },
    { name: 'jellybean', color: 'purple' },
    { name: 'marshmallow', color: 'white' },
    { name: 'gumdrop', color: 'red' },
    { name: 'toffee', color: 'brown' },
    { name: 'rock candy', color: 'blue' },
    { name: 'peppermint', color: 'white' },
    { name: 'licorice', color: 'black' },
    { name: 'gummy worm', color: 'green' },
    { name: 'cotton candy', color: 'pink' },
    { name: 'caramel apple', color: 'green' },
    { name: 'candy cane', color: 'grey' },
    { name: 'chocolate truffle', color: 'black' },
    { name: 'hard candy', color: 'purple' },
    { name: 'jellybean', color: 'yellow' },
];

let reloaded = numbers.reduce((acc, item) =>{
    if (!(acc[item])) {
        acc[item] = 1
    } else {
        acc[item] ++
    }
    return acc
}, {})

console.log(reloaded)

let repeatColors = sweets
    .map((item) => item.color)
    .reduce((acc, item) =>{
        if (!(acc[item])) {
            acc[item] = 1
        } else {
            acc[item] ++
        }
        return acc
    }, {})

console.log(repeatColors)