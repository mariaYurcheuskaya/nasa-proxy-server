import express from 'express';
import { getMeteors } from '../controllers/meteors-controller.js';
import { validate } from '../middlewares/validator.js';

const meteorsRouter = express.Router();

meteorsRouter.get('/meteors', validate('meteorRequestSchema'), getMeteors);

export default meteorsRouter;