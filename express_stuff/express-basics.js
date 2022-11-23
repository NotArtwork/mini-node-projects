
const express = require('express')
const app = express()

app.listen(5003, () => {
    console.log('Server is listening on 5003')
})

app.get('/', (req, res) => {

    res.status(200).send('Home Page')

})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

app.all('*', (req, res) => {
    res.status(404).send('<h1> Resource not found </h1>')
})


