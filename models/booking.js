const mongoose = require('mongoose')
const roomModel = require('./room')
const moment = require('moment')

const bookingSchema = new mongoose.Schema({
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
        required: false
    },
    comment: {
        type: String,
        required: false
    }
})


bookingSchema.pre('save', async function (next) {
    let price = 0
    for(let i = 0; i < this.rooms.length; i++){
        let room = await roomModel.findOne({_id:this.rooms[i]})
        price+= room.price
    }
    let arrival = moment(this.dateArrival, 'YYYY-MM-DD')
    let departure = moment(this.dateDeparture, 'YYYY-MM-DD')
    this.dateArrival = arrival
    this.dateDeparture = departure
    let duration = departure.diff(arrival, 'days')
    this.price = price * duration
    next()
})

var bookingModel = mongoose.model('booking', bookingSchema)

module.exports = bookingModel

