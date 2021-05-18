const jwt = require('jsonwebtoken')
const config = require('../utils/config')

const createToken = (user) => {
    delete user.password
    const token = jwt.sign({user}, config.privatekey , {expiresIn: '7d'})
    return token
}

const checkToken = (request, response, next) => {
    if(!request.headers.authorization){
        return response.status(403).send({error: 'No Authorization headers'})
    }
    let authorization = request.headers.authorization
    let token = authorization.split('Bearer ')[1]

    let decoded = jwt.verify(token, config.privatekey)
    request.user = decoded.user
    next()
}

module.exports = {
    createToken: createToken,
    checkToken: checkToken
}