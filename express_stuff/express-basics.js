const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'))
//     adding to static assets
//     SSR
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(5003, () => {
    console.log('Server is listening on port 5003..')
})

