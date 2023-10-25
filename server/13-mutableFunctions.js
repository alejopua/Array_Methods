// Challenge 1
const products = [
    { title: 'Notebook', price: 2000, id: 1 },
    { title: 'Mouse', price: 20, id: 2 },
    { title: 'Keyboard', price: 200, id: 3 },
    { title: 'Gamepad', price: 50, id: 4 },
]

const myProducts = []
let products2
const productsCopy = [...products]
const product = productsCopy.findIndex(item => item.id === 3)
if (product) {
    myProducts.push(productsCopy[product])
    productsCopy.splice(product, 1)
    products2 = [...products].filter((item, index) => index != product)
};
console.log(productsCopy)
console.log(myProducts)
console.log(products2)
console.log('-'.repeat(50))

// ------------------------------------------------
// Challenge 2

const productsV2 = [
    { title: 'Notebook', price: 2000, id: 1 },
    { title: 'Mouse', price: 20, id: 2 },
    { title: 'Keyboard', price: 200, id: 3 },
    { title: 'Gamepad', price: 50, id: 4 },
]
const update = {
    id: 3,
    change: {
        title: 'PC',
        price: 3000,
    }
}

const newArray = productsV2.map(item => {
    if (item.id === update.id) {
        return {
            ...item,
            ...update.change
        }
    } else {
        return {...item}
    }
})

console.log(newArray)