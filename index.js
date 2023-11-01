require('dotenv').config()
// DEPENDENCIES
const express = require('express')

// CONFIGURATION
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

//ROUTES
app.get('/', (req, res) => {
    //res.send('Hello World')
    res.render('home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
// LISTEN
app.listen(process.env.PORT);