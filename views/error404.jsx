const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops! Sorry, We cannot find such page!</p>
                <div>
                    <img src="/images/error404.jpg" alt="Error 404" height="300" width="500"></img>
                    <div>
                        Photo by <a href="https://unsplash.com/@leekos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Kostiantyn Li</a> on <a href="https://unsplash.com/photos/a-broken-cell-phone-with-the-word-error-on-it-Fi_nhg5itCw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

                    </div>
                </div>

            </main>
        </Def>
    )
}

module.exports = error404
