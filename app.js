const http = require('http')
const fs = require('fs')

http
    .createServer((req, res) => {
        // const text = fs.readFileSync('./content/big.txt', 'utf8')
        // res.end(text)
        const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
        fileStream.on('open', () => {
            fileStream.pipe()
        })
        fileStream.on('error', () => {

        })
    })
    .listen(5001)