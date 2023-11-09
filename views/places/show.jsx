const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )

    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! ??' : 'Rave! ??'}</h2>
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