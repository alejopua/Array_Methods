const animals = ['dog', 'cat', 'bird', 'fish', 'lion', 'tiger', 'bear', 'elephant', 'monkey', 'snake', 'cow', 'horse', 'pig', 'chicken', 'duck']

let rta = true
for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
    if (element === 'tigers') {
        rta = true
        break
    } else {
        rta = false
    }
}

console.log(rta)
console.log('-------------------')

const rta2 = animals.includes('tigers')
console.log(rta2)