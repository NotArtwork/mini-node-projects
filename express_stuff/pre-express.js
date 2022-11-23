const http = require('http')
const { url } = require('inspector')
const { readFileSync } = require('fs')

const server = http.createServer((req, res) => {

    const url = req.url

    if (url === '/') {

        res.writeHead(200, { 'content-type': 'text/html' })
        console.log('User hit the server')
        res.end('<h1> home page </h1>')

    }
    else if (url === '/about') {

        res.writeHead(200, { 'content-type': 'text/html' })
        console.log('User hit the server')
        res.end('<h1> About Page </h1>')

    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        console.log('User hit the server')
        res.end('<h1> Page not found! </h1>')
    }

})

server.listen(5001)