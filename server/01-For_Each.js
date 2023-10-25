const products = [
    'car',
    'bike',
    'boat',
    'plane'
]

console.log('For')
for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(`${i}. ${element}`);
}
console.log('-------------------');
console.log('For Each')
products.forEach((item, index) => {
    console.log(`${index}. ${item}`)
})