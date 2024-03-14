const express = require('express');
const { meteorsController } = require('../controllers');
const { validator } = require('../middlewares');

const router = express.Router();

router.get('/', validator('meteorRequestSchema'), meteorsController.getMeteors);

module.exports = router;
