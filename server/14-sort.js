const months = ["Jan", "March", "April", "June"]
months.sort()
console.log(months)
console.log('------------------')

const numbers = [2, 40, 5, 62, 406]
numbers.sort((a, b) => (a - b))
console.log(numbers)
console.log('------------------')

const words = [
    "responsibility",
    "explanation",
    "wilderness",
    "mathematics",
    "imagination",
];
words.sort()
console.log(words)
console.log('------------------')

// include at the array the objects with dates aleatory
const orders = [
    {
        customerName: "Wendy",
        total: 4600,
        delivered: true,
        date: new Date(2021, 9, 1).toLocaleDateString('es-CO') // October 1st, 2021
    },
    {
        customerName: "Paola",
        total: 3120,
        date: new Date(2021, 8, 15).toLocaleDateString('es-CO'), // September 15th, 2021
        delivered: false,
    },
    {
        customerName: "Diana",
        total: 11840,
        date: new Date(2021, 7, 23).toLocaleDateString('es-CO'), // August 23rd, 2021
        delivered: true,
    },
    {
        customerName: "Marina",
        total: 5240,
        delivered: true,
        date: new Date(2021, 6, 10).toLocaleDateString('es-CO') // July 10th, 2021
    },
];
orders.sort((a, b) => (a.date - b.date))
console.log(orders)
