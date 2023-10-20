const numbers = [1, 2, 3, 4, 5];

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum += element;
}
const boxReduce = numbers.reduce((sum, item) => (sum += item) ,0)
console.log('for: ', sum);
console.log('------------------')
console.log('reduce: ', boxReduce)