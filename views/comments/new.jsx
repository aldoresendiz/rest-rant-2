const React = require('react')
const Def = require('../default')

function new_comment_form(data) {
    let message = ''
    if (data.message) {
        message = (
            <h4 className="alert-danger">
                {data.message}
            </h4>
        )
    }
    return (
        <Def>
            <main>
                <h1>Add a New Comment</h1>
                {message}
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
                    <div className="form-group">
                        <label htmlFor="rant">Rant</label>
                        <input className="form-control" id="rant" name="rant"></input>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment"></input>
                </form>
            </main>
        </Def>
    )
}

module.exports = new_comment_form
