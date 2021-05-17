//import the seed data
const manyGiphs = require('./seed.json')

// import the db connection
const mongoose = require('./connection')

// import the model
const Giph = require('../models/giph_model')
//open a db connection
const db = mongoose.connection

Giph.deleteMany( {} ).then( () => {
    Giph.insertMany(manyGiphs) // adding an array of many fruits
    .then( (giphs) => {
        console.log('this is many sweet giphs', giphs)
        db.close()
    })
})
    .catch( (error) => {
        console.log(error);
    })