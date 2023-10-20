const numbers = Array.from({length: 30}, (_, index) => (index + 1))

const boxReduce = numbers
    .reduce((obj, item) => {
        if (item <= 5) {
            obj['1-5'] += item
        } 
        else if (item > 5 && item <= 12) {
            obj['6-12'] += item
        }
        else {
            obj['13-20'] += item
        }
        return obj
    } ,{
        '1-5': 0,
        '6-12': 0,
        '13-20': 0
    })

console.log('reduce: ', boxReduce)

// 1-10
// 10-15
// 15-20