const path = require('path')

// Get the normalized path for the OS you're working on.
console.log(path.sep)

// Creates a file path
const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath)


// Directs you the base path
const base = path.basename(filePath)
console.log(base)

// Returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.exe')
console.log(absolute)