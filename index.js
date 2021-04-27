var express = require('express')
var routerUsers = require('./routers/users')
var routerHotels = require('./routers/hotels')
var mongoose = require('mongoose')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/b3api', {useNewUrlParser: true, useUnifiedTopology: true})

var db = mongoose.connection
db.on('error', console.error.bind(console, "connection error: "))
db.once('open', () => console.log('status :', db.states[db._readyState]))

var app = express()

app.use(express.json())
app.use('/hotels', routerHotels)
app.use('/users', routerUsers)
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log('Server is running on', PORT)
})

