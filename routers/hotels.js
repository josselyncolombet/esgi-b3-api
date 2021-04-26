var express = require('express')
var router = express.Router()
var hotelModel = require('../models/hotel')

/* https://api.monsuperhotel.com/hotels/59bfd752z */
router.get('/:id', async(request, response) => {
    var hotel = await hotelModel.findOne({_id:request.params.id})
    response.json({hotel})
})

/* https://api.monsuperhotel.com/hotels*/
router.get('/', async (request, response) => {
    var hotels = await hotelModel.find({}) // == "SELECT * from users"
    response.json({ hotels })
})

/* https://api.monsuperhotel.com/hotels*/
router.post('/', (request, response) => {
    let { body } = request
    var hotel = new hotelModel(body)
    hotel.save()
    response.json({ hotel })
})

/* https://api.monsuperhotel.com/hotels/59bfd752z*/
router.put('/:id', async(request, response) => {
    var hotel = await hotelModel.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    response.json(hotel)

})

/* https://api.monsuperhotel.com/hotels/59bfd752z*/
router.delete('/:id', async(request, response) => {
    var hotel = await hotelModel.findOneAndRemove({_id:request.params.id})
    response.status(200).send()
})

module.exports = router