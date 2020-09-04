const router = require('express').Router()
const todoRouter = require('./todoRouter')
const userRouter = require('./userRouter')
const randomActivityRouter = require('./randomActivityRouter')

router.use('/', userRouter)
router.use('/todos', todoRouter)
router.use('/activity', randomActivityRouter)

module.exports = router