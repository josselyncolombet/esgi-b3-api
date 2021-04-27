var mongoose = require('mongoose')

var bookingSchema = new mongoose.Schema({
    rooms: {
        type: Array,
        required: true
    },
    dateArrival: {
        type: String,
        required: true
    },
    dateDeparture: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: false
    }
})



var bookingModel = mongoose.model('booking', bookingSchema)

module.exports = bookingModel

