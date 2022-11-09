const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
    console.log(`data recieved user ${name} He is ${age} years old`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here`)
})


customEmitter.emit('response', 'Antonio', 28)