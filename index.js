// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// DEPENDENCIES

// CONFIGURATION
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

// Controllers & Routes
app.use('/places', require('./controllers/places'))

//ROUTES
app.get('/', (req, res) => {
    //res.send('Hello World')
    res.render('home')
})

app.get('*', (req, res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    res.status(404).render('error404')
})
// Listen for connections
app.listen(process.env.PORT);