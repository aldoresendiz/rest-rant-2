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
        res.render('places/show', {place: places[id], id})
    }
    // res.render('places/show')
})

router.get('/:id/edit', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // console.log(places[id])
        res.render('places/edit', { place: places[id], id })
    }
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
    // console.log(req.body)
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

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
        //res.send('STUB DELETE places/:id')
    }
})

router.put('/:id', (req, res) => {
    // console.log('This is it=>', req.params.id)
    let id = Number(req.params.id)
    // console.log(id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
         // I need to dig into req.body and make sure the data is valid
        if (!req.body.pic) {
            // Default image since one was not provided
            req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
            req.body.city = 'Anytown'
        }
        if (!req.body.state) {
            req.body.state = 'USA'
        }
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }
})


module.exports = router