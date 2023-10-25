const tasks = [
    { name: 'Write for Envato Tuts+', duration: 120 },
    { name: 'Work out', duration: 60 },
    { name: 'Procrastinate on Duolingo', duration: 240 },
    { name: 'Play Civilization V', duration: 720}
]

const methodOne = []

for (let i = 0; i < tasks.length; i++) {
    const element = tasks[i];
    const newObject = {
        task: element.name,
        duration: element.duration,
        description: `tarea numero ${i}`
    }
    methodOne.push(newObject)
}

const methodTwo = tasks.map((item, index) => {
    return {
        task: item.name,
        duration: item.duration,
        description: `tarea del method  two, # ${index}`
    }
})

console.log('tasks', tasks)
console.log('------------------------------------')
console.log('methodone', methodOne)
console.log('------------------------------------')
console.log('methodTwo', methodTwo)