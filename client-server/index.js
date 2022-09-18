const express = require('express')
const models = require('./models/general.model')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')

const app = express()

mongoose.connect('mongodb+srv://esambald:Yj39ual8lXxmwUd4@cluster0.swylr9h.mongodb.net/?retryWrites=true&w=majority', 
{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

const port = 3001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', indexRouter)

app.listen(port, () => {

})