const objects = ['house', 'car', 'tree', 'table', 'chair', 'window', 'door', 'lamp', 'sofa', 'bed' , 'butterfly'];

const newArray = []

for (let i = 0; i < objects.length; i++) {
    const item = objects[i];
    if (item.length >= 7) {
        newArray.push(item);
    }
}

const filterMethod = objects.filter((item) => (item.length >= 7))

const search = (query) => {
    const result = objects.filter((item) => (item.includes(query)))
    return result
}
console.log(objects);
console.log('------------------')
console.log(newArray);
console.log('------------------')
console.log(filterMethod);
console.log('------------------')
console.log(search('b'));