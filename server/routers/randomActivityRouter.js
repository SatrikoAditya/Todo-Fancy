const router = require('express').Router()
const RandomActivityController = require('../controllers/RandomActivityController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', RandomActivityController.activityGenerator)

module.exports = router