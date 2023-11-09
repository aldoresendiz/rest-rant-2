const db = require('../models')

// to use await, we need an async function
async function seed() {
    // now we are getting the place to add comments, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Now we create a fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished FGran',
        rant: false,
        stars: 5.0,
        content: 'Wow! Simple Amazing!! Highly recommended!!!'
    })

    // Now we add the comment to the places's comment array.
    place.comments.push(comment.id)

    // Now we save the place since it has a comment
    await place.save()

    place = await db.Place.findOne({ name: 'El Asador' })
    comment = await db.Comment.create({
        author: 'Speedy Gonzalez',
        rant: false,
        stars: 5.0,
        content: 'Sabor a queso y mas que eso!!!!!'
    })
    place.comments.push(comment.id)
    await place.save()

    // Exit the program
    process.exit()
}

seed()