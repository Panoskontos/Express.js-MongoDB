const mongoose = require('mongoose')

const myschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date_enter:{
        type:String,
        required:true
    },
    date_left:{
        type:String,
        required:false,
        default: Date.now
    }
})


module.exports = mongoose.model('Example', myschema)