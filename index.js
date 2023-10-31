// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

//ROUTES
app.get('/', (req, res) => {
    res.send('Hello World')
})

// LISTEN
app.listen(3000);