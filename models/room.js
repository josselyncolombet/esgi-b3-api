var mongoose = require('mongoose')

var roomSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    beds: {
        type: Number,
        required: true
    },
    furnitures: {
        type: Array,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

var roomModel = mongoose.model('room', roomSchema)

module.exports = roomModel
