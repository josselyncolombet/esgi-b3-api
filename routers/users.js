var express = require('express')
var router = express.Router()

router.get('/', (request, response) => {
    let { id } = request.query
    response.json({ id })
})

router.post('/', (request, response) => {
    let { body } = request
    response.json({ body })
})

module.exports = router