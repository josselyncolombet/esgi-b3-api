var express = require('express')
var router = express.Router()
var userModel = require('../models/user')

/* https://api.monsuperhotel.com/users/59bfd752z */
router.get('/:id', async(request, response) => {
    var user = await userModel.findOne({_id:request.params.id})
    response.json({user})
})

/* https://api.monsuperhotel.com/users*/
router.get('/', async (request, response) => {
    var users = await userModel.find({}) // == "SELECT * from users"
    response.json({ users })
})

/* https://api.monsuperhotel.com/users*/
router.post('/', (request, response) => {
    let { body } = request
    var user = new userModel(body)
    user.save()
    response.json({ user })
})

/* https://api.monsuperhotel.com/users/59bfd752z*/
router.put('/:id', async(request, response) => {
    var user = await userModel.findOneAndUpdate({_id:request.params.id}, request.body, {new:true})
    response.json(user)

})

/* https://api.monsuperhotel.com/users/59bfd752z*/
router.delete('/:id', async(request, response) => {
    var user = await userModel.findOneAndRemove({_id:request.params.id})
    response.status(200).send()
})

module.exports = router