const objs = ['house', 'car', 'tree', 'table', 'chair', 'book'];

const space = ' '
const separator = '--'
let rta = ''
for (let i = 0; i < objs.length; i++) {
    const element = objs[i];
    if (i === objs.length - 1) {
        rta = rta + element + space
    } else {
        rta = rta + element + separator
    }
}

console.log(rta)
console.log('-------------------')

const rta2 = objs.join('--')
console.log(rta2)