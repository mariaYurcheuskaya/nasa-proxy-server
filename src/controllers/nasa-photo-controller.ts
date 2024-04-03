import { getRoverPhotoUrl } from '../services/rover-photo-service';
import { Request, Response, NextFunction } from 'express';

export const postRoverPhoto = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const roverPhotoUrl = await getRoverPhotoUrl();
    res.render('rover-photo.html', { roverPhotoUrl });
  } catch (error) {
    next(error);
  }
};