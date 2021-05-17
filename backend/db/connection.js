const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/' +  'giph_db'

// config params (very robust tool) below will set up the configurations, just use/remember these ones, depecration warnings
const config =  {
    useUnifiedTopology: true, 
    useNewUrlParser: true, 
    useFindAndModify: false, 
}

// connecting to the URI // this connects mongoose to mongo
mongoose.connect(mongoURI, config)

// connect to the DB commection
const db = mongoose.connection

db.on('error', (err) => console.log(err.message + 'is mongod not running'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

module.exports = mongoose