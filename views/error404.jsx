const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops! Sorry, We cannot find such page!</p>
            </main>
        </Def>
    )
}

module.exports = error404
