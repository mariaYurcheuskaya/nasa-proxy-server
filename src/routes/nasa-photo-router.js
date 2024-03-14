const express = require('express');
const { nasaPhotoController } = require('../controllers');
const router = express.Router();

router.post('/', nasaPhotoController.postRoverPhoto);

module.exports = router;
