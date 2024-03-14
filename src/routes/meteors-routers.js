const express = require('express');
const { meteorsController } = require('../controllers');
const router = express.Router();

router.get('/', meteorsController.getMeteors);

module.exports = router;
