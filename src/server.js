const   express = require('express'),
        morgan = require('morgan'),
        path = require('path'),
        home_router = require('./routes/home'),
        mongoose = require('./database'),
        app = express()

// settings
app.set('port', process.env.PORT || 3000)
// middlewares
app.use(morgan("dev"))
app.use(express.json())
// routes
app.use('/home', home_router)
// staticfiles
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})