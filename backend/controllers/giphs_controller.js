// import express
const express = require('express');
// instantiate a new instance of express.Router
const router = express.Router();
// import the 'giphs' model
const giphs = require('../db/seed.json');

// import the db connection
const mongoose = require('../db/connection');
const db = mongoose.connection;

// import the Giph model
const Giph = require('../models/giph_model');



//GET all routes (show all)
router.get('/', (req, res) => {
    Giph.find({})
    .then((allGiphs) => {
        res.json({
            status: 200, 
            giphs: allGiphs
    })
        // db.close() // how to make this work without restarting nodemon everytime
    })
})

//SHOW
//SHOW a single route by ID
router.get('/:giphId', async (req, res) => {
    const findGiph = await Giph.findById(req.params.giphId)
    res.json({
        status: 200, 
        giph: findGiph
    })
})


//POST means create
//POST a single route (only one) 
router.post('/', async (req, res) => {
    const giph = await Giph.create(req.body)// req.body is the information coming from the body of the client
    res.json({
        status:200, 
        giph: giph
    })
    // db.close() // how to make this work without restarting nodemon everytime
})

//PUT means to UPDATE
//PUT - update a single route by ID (only one) 
router.put('/:giphId', async (req, res) => {
    const giph = await Giph.findByIdAndUpdate(req.params.giphId, req.body, {new: true})
    res.json({
        status:200, 
        giph: giph
    })
})

//DELETE a single route
router.delete('/:id', async (req, res) => {
    const deleteGiphs = await Giph.findByIdAndDelete(req.params.id)
    res.json({
        status: 200, 
        msg: 'this item has been deleted!'
    })
})




module.exports = router