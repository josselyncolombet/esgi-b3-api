var express = require('express')
var router = express.Router()
var roomModel = require('../models/room')

/* https://api.monsuperhotel.com/rooms/59bfd752z */
router.get('/:id', async(request, response) => {
    var room = await roomModel.findOne({_id:request.params.id})
    response.json({room})
})

/* https://api.monsuperhotel.com/rooms*/
router.get('/', async (request, response) => {
    var rooms = await roomModel.find({}) // == "SELECT * from bookings"
    response.json({ rooms })
})

/* https://api.monsuperhotel.com/rooms*/
router.post('/', (request, response) => {
    let { body } = request
    var room = new roomModel(body)
    room.save()
    response.json({ room })
})

/* https://api.monsuperhotel.com/rooms/59bfd752z*/
router.put('/:id', async(request, response) => {
    var room = await roomModel.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    response.json(room)

})

/* https://api.monsuperhotel.com/bookings/59bfd752z*/
router.delete('/:id', async(request, response) => {
    var room = await roomModel.findOneAndRemove({_id:request.params.id})
    response.status(200).send()
})

module.exports = router