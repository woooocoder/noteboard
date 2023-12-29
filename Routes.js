const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/user', (req, res) => {
    res.render('./views/User.js')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})