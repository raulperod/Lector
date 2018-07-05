const   mongoose = require('mongoose'),
        URI = 'mongodb://localhost/lector'

mongoose.connect(URI)
    .then(db => console.log('DB is conected'))
    .catch(err => console.error(err))

module.exports = mongoose