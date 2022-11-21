const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, )
    console.log('User hit the server')
})

server.listen(5001)