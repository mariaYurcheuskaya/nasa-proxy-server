const { roverPhotoService } = require('../services');

const postRoverPhoto = async (req, res, next) => {
  try {
    const roverPhotoUrl = await roverPhotoService.getRoverPhotoUrl();
    res.render('rover-photo.html', { roverPhotoUrl });
  } catch (error) {
    next(error);
  }
};

module.exports = { postRoverPhoto };
