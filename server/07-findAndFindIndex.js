const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let rta = undefined

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element === 5) {
        rta = element;
        break;
    }
}
console.log('rta', rta);
console.log('------------------');

const rta2 = numbers.find(item => item === 5)
console.log('rta2', rta2);
console.log('------------------');

const products = [
    {
        name: "Pizza",
        price: 20,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 35,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 15,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 39,
        id: '🥞'
    },
];

const rt3 = products.find(item => item.id === '🌭')
console.log('rt3', rt3);
console.log('------------------');
const rt4 = products.findIndex(item => item.id === '🌭')
console.log('rt4', rt4);