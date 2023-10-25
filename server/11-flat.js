const objs = [ 
    [9, 8, 7],
    [6, 5, 4], 
    [3, 2, [1, 0, [-1, -2, [-3, -4, [-5, -6, [-7, -8, [-9, -10]]]]]]], 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 
];

function flattenedArray(arr) {
    const flattened = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened.push(...flattenedArray(arr[i]))
        } else {
            flattened.push(arr[i])
        }
    }
    return flattened
}
console.log('recursivity:', flattenedArray(objs))
console.log('------------------')

const rta = objs.flat(Infinity)
console.log('flat:', rta)