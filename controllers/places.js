const router = require('express').Router()

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
    // res.send('GET /places')
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/h-thai-ml-tables.jpg'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee-cat.jpg'
    }]
    res.render('places/index', {places})
})

// POST
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router