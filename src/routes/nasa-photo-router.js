import express from 'express';
import { postRoverPhoto } from '../controllers/nasa-photo-controller.js';

const nasaPhotoRouter = express.Router();

nasaPhotoRouter.post('/roverPhoto', postRoverPhoto);

export default nasaPhotoRouter;