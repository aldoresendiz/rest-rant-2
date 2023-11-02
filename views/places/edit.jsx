const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Place</h1>
                {/*<form method="POST" action={`/places/${data.id}?_method=DELETE`}>*/}
                {/*// the following line does need to be called different to what is in the instructions. */}
                <form method="POST" action={`/places/${data.id}?_method=PUT`} >
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" value={data.place.name} required></input>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" type="url" id="pic" value={data.place.pic} name="pic"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-6">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" value={data.place.city} name="city"></input>
                        </div>
                        <div className="form-group col-sm-6">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" value={data.place.state} name="state"></input>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" value={data.place.cuisines} name="cuisines" required></input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Save Place"></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form