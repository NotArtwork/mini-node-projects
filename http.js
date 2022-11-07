const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.end('Welcome to our home page!')
    }
    if (req.url === '/about') {
        res.end('Here is some history.')
    }


    res.end(`
    <h1>Oops!</h1>
    <p> We can't seem to find the page that you're looking for! <p/>
    <a href='/'> Home </a>`)
})

server.listen(5001)


console.log('stuff')