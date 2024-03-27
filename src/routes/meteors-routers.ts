import express from 'express';
import { getMeteors } from '../controllers/meteors-controller';
import { validate } from '../middlewares/validator';

const meteorsRouter = express.Router();

meteorsRouter.get('/meteors', validate('meteorRequestSchema'), getMeteors);

export default meteorsRouter;