const router = require('express').Router()
const todoController = require('./todoRouter')

router.use('/todos', todoController)

module.exports = router