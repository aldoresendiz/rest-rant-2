const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated!
        </h3>
    )

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot+c.stars
        },0)
        let averageRating = sumRatings / data.place.comments.length
        rating = (
            <h3>
                {Math.round(averageRating)} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.place.pic} alt={data.place.name} width="200px" height="200px"></img>
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>
                            Rating
                        </h2>
                        {rating}
                        <h3>
                            Not Rated
                        </h3>
                        <p />
                        <h2>
                            Description
                        </h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <div className="col-sm-6">
                            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                                Edit
                            </a>
                        </div>
                        <div className="col-sm-6">
                            <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <h2>Comments</h2>
                {comments}

                {/* <div className="row">
                    <div className="col-sm-6">
                        <h1>Got your Own Rant or Rave?</h1>
                    </div>

                    <form method="POST" action="/comments">
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Content</label>
                        <input className="form-control" type="textarea" id="content" name="content"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="star">Star Rating</label>
                        <input 
                            type="number"
                            step="0.5"
                            className="form-control" 
                            id="star" 
                            name="star"></input>
                    </div>
                    <div>
                        <label htmlFor="rant">Rant</label>
                        <input className="form-control" type="checkbox" id="rant" name="rant" value="rant"></input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment"></input>
                </form>


                </div> */}
            </main>
        </Def>
    )
}

//function show(data) {
//    return (
//        <Def>
//            <main>
//                <h1>{data.place.name}</h1>
//                <div>Coming soon!</div>
//                <p>{data.place.city}, {data.place.state}</p>
//                <div>
//                    <a href={`/places/${data.id}/edit`} className="btn btn-warning">
//                        Edit
//                    </a>
//                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
//                        <button type="submit" className="btn btn-danger">
//                            Delete
//                        </button>
//                    </form>
//                </div>
//            </main>
//        </Def>
//    )
//}

module.exports = show