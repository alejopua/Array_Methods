const numbers = [11, 12, 13, 14, 15, 16, 7, 8, 11]

let rta = false

for (let i = 0; i < numbers.length; i++) {
    const item = numbers[i];
    if (item >= 5) {
        rta = true
    }
}

console.log(rta)
console.log('-------------------')

const rta2 = numbers.every((item) => (item >= 5))
console.log(rta2)
console.log('-------------------')

const group = [
    { name: 'Nicolas', age: 28 },
    { name: 'Andres', age: 10 },
    { name: 'Juan', age: 18 },
    { name: 'Jose', age: 15 },
    { name: 'Maria', age: 21 },
    { name: 'Camila', age: 17 },
    { name: 'Carlos', age: 12 },
    { name: 'Pedro', age: 16 },
    { name: 'Paula', age: 14 },
]

const rt3 = group.every((item) => (item.age <= 27))
console.log(rt3)