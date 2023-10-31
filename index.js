require('dotenv').config()
// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
// LISTEN
app.listen(process.env.PORT);