var express = require('express')
var router = express.Router()
var bookingModel = require('../models/booking')

/* https://api.monsuperhotel.com/bookings/59bfd752z */
router.get('/:id', async(request, response) => {
    var booking = await bookingModel.findOne({_id:request.params.id})
    response.json({booking})
})

/* https://api.monsuperhotel.com/bookings*/
router.get('/', async (request, response) => {
    var bookings = await bookingModel.find({}) // == "SELECT * from bookings"
    response.json({ bookings })
})

/* https://api.monsuperhotel.com/bookings*/
router.post('/', (request, response) => {
    let { body } = request
    var booking = new bookingModel(body)
    booking.save()
    response.json({ booking })
})

/* https://api.monsuperhotel.com/bookings/59bfd752z*/
router.put('/:id', async(request, response) => {
    var booking = await bookingModel.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    response.json(booking)

})

/* https://api.monsuperhotel.com/bookings/59bfd752z*/
router.delete('/:id', async(request, response) => {
    var booking = await bookingModel.findOneAndRemove({_id:request.params.id})
    response.status(200).send()
})

module.exports = router