// API with 5 lines
const express = require('express')
const app = express();

// connect to DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/example')
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("Connected to databse"))



// setting up routes
app.use(express.json())
const routes = require('./routes/example.js')
app.use('/example',routes)

// Routes
app.get('/',(req,res) => res.send("We are on home"))
// app.get('/posts',(req,res) => res.send("We are on posts"))
 


// start listening
app.listen(3000, ()=>console.log('Server Started'))
