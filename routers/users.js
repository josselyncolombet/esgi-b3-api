var express = require('express')
var router = express.Router()
var userModel = require('../models/user')

router.get('/', async (request, response) => {
    var users = await userModel.find({}) // == "SELECT * from users"
    response.json({ users })
})

router.post('/', (request, response) => {
    let { body } = request
    response.json({ body })
})

module.exports = router