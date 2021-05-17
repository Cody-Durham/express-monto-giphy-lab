//CREATEING A NEW SCHEMA    

// import the connection
const mongoose = require('../db/connection')// this is so we can close it in a funciton

//import the lib schema?
const Schema = mongoose.Schema

//create a new schema
const giphSchema = new Schema({
    name: String, 
    url: String, 
})

// creating the model
const Giph = mongoose.model('Giph', giphSchema) 

module.exports = Giph