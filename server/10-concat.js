const elements = ['Fire', 'Air', 'Water'];
const otherElements = ['Earth', 'Metal', 'Wood'];
const rta4 = []

const rta = [...elements]
for (let i = 0; i < otherElements.length; i++) {
    const element = otherElements[i];
    rta.push(element)
}
console.log('for:', rta)
console.log('-----------------')

const rta2 = [...elements, ...otherElements]
console.log('spread operator:', rta2)
console.log('-----------------')

const rta3 = elements.concat(otherElements)
console.log('concat:', rta3)
console.log('-----------------')

rta4.push(...elements, ...otherElements)
console.log('push + spread operator:', rta4)

