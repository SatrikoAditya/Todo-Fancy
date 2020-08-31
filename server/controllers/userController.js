const { User } = require('../models/')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res) {
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
            console.log(err, '<== error')
            let error = err.errors[0].message || 'Internal server error'
            res.status(500).json({error})
        })
    }

    static login(req, res) {
        let { email, password } = req.body
        User.findOne({
            where : {
                email
            }
        })
        .then(data => {
            if(!data) {
                throw {msg: 'invalid email or password'}
            } else {
                let comparePass = comparePassword(password, data.password)
                if(!comparePass) {
                    throw {msg: 'invalid email or password'}
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
            let error = err.msg || 'Internal server error'
            res.status(500).json({error})
        })
    }
}
module.exports = UserController