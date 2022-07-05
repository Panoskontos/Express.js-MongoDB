
const express = require('express')
const example = require('../models/Example')
const router = express.Router()

// import our model
const Example = require('../models/Example')

// Getting all
router.get('/',async (req,res)=>{
    try {
        const users = await Example.find()
        res.json(users)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

// Getting one
router.get('/:id',(req,res)=>{
})


// Creating
router.post('/', (req,res)=>{
})

// Updating


// Deleting


module.exports = router