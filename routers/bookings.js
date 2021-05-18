const express = require('express')
const router = express.Router()
const bookingModel = require('../models/booking')
const {checkToken} = require('../utils/token')

/* https://api.monsuperhotel.com/bookings/59bfd752z */
router.get('/:id', async(request, response) => {
    var booking = await bookingModel.findOne({_id:request.params.id})
    response.json({booking})
})

/* https://api.monsuperhotel.com/bookings*/
router.get('/', checkToken, async (request, response) => {
    var bookings = await bookingModel.find({user: request.user._id}) // == "SELECT * from bookings WHERE user = req.token"
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