const objects = ['house', 'car', 'tree', 'table', 'chair', 'window', 'door', 'lamp', 'sofa', 'bed' , 'butterfly'];

const newArray = []

for (let i = 0; i < objects.length; i++) {
    const item = objects[i];
    if (item.length >= 7) {
        newArray.push(item);
    }
}
console.log(objects);
console.log('------------------')
console.log(newArray);