const tasks = [
    { name: 'Write for Envato Tuts+', duration: 120 },
    { name: 'Work out', duration: 60 },
    { name: 'Procrastinate on Duolingo', duration: 240 },
    { name: 'Play Civilization V', duration: 720}
]

const mapRealoaded = tasks.map((item, index) => {
    return {
        ...item,
        category: 'tasks'
    }
})

console.log('mapReoaded', mapRealoaded)