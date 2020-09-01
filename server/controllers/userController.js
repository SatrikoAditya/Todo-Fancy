const { User } = require('../models/')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        let { email, password } = req.body
        User.create({
            email, password
        })
        .then(data => {
            res.status(201).json({
                msg: 'register user success',
                id: data.id,
                email: data.email
            })
        })
        .catch(err => {
            next(err)
        })
    }

    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({
            where : {
                email
            }
        })
        .then(data => {
            if(!data) {
                throw {name: 'LOGIN_FAILED'}
            } else {
                let comparePass = comparePassword(password, data.password)
                if(!comparePass) {
                    throw {name : 'LOGIN_FAILED'}
                } else {
                    let payload = {
                        id: data.id,
                        email: data.email
                    }
                    let token = generateToken(payload)
                    res.status(200).json({token})
                }
            }
        })
        .catch(err => {
            next(err)
        })
    }
}
module.exports = UserController