const jwt = require('jsonwebtoken')

function generateToken(payload){
    return jwt.sign(payload, process.env.SECRET);
}

function verifyToken(token) {
    return new Promise(function(resolve, reject) {
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if(err) {
                reject({msg: 'Invalid Token'})
            } else {
                resolve(decoded)
            }
        })
    })
}

module.exports = { generateToken, verifyToken } 