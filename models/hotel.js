var mongoose = require('mongoose')

var hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    furnitures:{
        type: Array, 
        required: true
    },
    location:{
        type: Object,
        required: true
    }
})

var hotelModel = mongoose.model('hotel', hotelSchema)

module.exports = hotelModel

