const express = require('express')
const router = express.Router()
const getMeteors = require('../controller/meteorsController')

router.get('/', getMeteors)

module.exports = router