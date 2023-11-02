const router = require('express').Router()
const places = require('../models/places.js')

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', {place: places[id]})
    }
    // res.render('places/show')
})

// GET /places
router.get('/', (req, res) => {
    // res.send('GET /places')
    //let places = [{
    //    name: 'H-Thai-ML',
    //    city: 'Seattle',
    //    state: 'WA',
    //    cuisines: 'Thai, Pan-Asian',
    //    pic: '/images/h-thai-ml-tables.jpg'
    //}, {
    //    name: 'Coding Cat Cafe',
    //    city: 'Phoenix',
    //    state: 'AZ',
    //    cuisines: 'Coffee, Bakery',
    //    pic: '/images/coffee-cat.jpg'
    //}]
    res.render('places/index', {places})
})

// POST
router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
    // res.send('POST /places')
})

module.exports = router