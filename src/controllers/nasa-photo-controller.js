import { getRoverPhotoUrl } from '../services/rover-photo-service.js';

export const postRoverPhoto = async (req, res, next) => {
  try {
    const roverPhotoUrl = await getRoverPhotoUrl();
    res.render('rover-photo.html', { roverPhotoUrl });
  } catch (error) {
    next(error);
  }
};