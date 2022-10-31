// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const {john, peter} = require('./name');
const sayHi = require('./utils')
const data = require('./alternative-flavors')
console.log(data)

sayHi('Antonio')
sayHi(peter)
sayHi(john)

// console.log(names)

