const { User } = require('../models/')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library');

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

    static async googleSign(req, res, next) {
        let { id_token } = req.body
        try {
        const client = new OAuth2Client(process.env.CLIENT_GOOGLE_ID);
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: process.env.CLIENT_GOOGLE_ID,
        });
        const payload = ticket.getPayload();
        const user = await User.findOne({
            where : {
            email: payload.email
            }
        })
        if(user) {
            const token = generateToken({
            id: user.id,
            email: user.email
            })
            res.status(200).json({token})
        } else {
            const newUser = User.create({
            email: payload.email,
            password: 'googlelogin'
            })
            const token = generateToken({
            id: newUser.id,
            email: newUser.email
            })
            res.status(200).json({token, city:newUser.city})
        }
        } catch(err) {
        console.log(err)
        }
    }
}
module.exports = UserController