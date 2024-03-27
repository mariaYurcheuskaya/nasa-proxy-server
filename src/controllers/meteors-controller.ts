import { Request, Response, NextFunction } from 'express';
import { getMeteorsData } from '../services/meteors-service';
import { MeteorRequest } from '../types/meteors';

export const getMeteors = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const request = buildMeteorRequest(req.query as MeteorRequest);

    const meteors = await getMeteorsData(request);
    res.render('meteors.html', { meteorsData: meteors });
  } catch (error) {
    next(error);
  }
};

const buildMeteorRequest = (query : MeteorRequest) => ({
  date: query.date,
  count: query.count,
  hasDangerousMeteors: query.hasDangerousMeteors,
});