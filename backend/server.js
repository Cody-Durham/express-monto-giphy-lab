const express = require('express')
const logger = require('morgan') 
const app = express()
const PORT = process.env.PORT || 3000

// MIDDLEWARE
app.use(logger('dev'))
//These deal with receiving data (not needed for just sending like only making API calls)
//both will add to the req.body
app.use(express.urlencoded( {extended:false} ))
app.use(express.json())


// set the default route
app.get('/', (req, res) => {
    res.json({
        status: 200, 
        msg: 'you have hit the default route'
    })
});


// connect the giphs controller here
const giphsController = require('./controllers/giphs_controller')
app.use('/giphs', giphsController)


app.listen(PORT, () => {
    console.log(`Listening in on port ${PORT}`)
});