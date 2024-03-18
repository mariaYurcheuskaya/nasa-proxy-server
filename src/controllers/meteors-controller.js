import { getMeteorsData } from '../services/meteors-service.js';

export const getMeteors = async (req, res, next) => {
  try {
    const request = buildRequest(req.query);

    const meteors = await getMeteorsData(request);
    res.render('meteors.html', { data: meteors });
  } catch (error) {
    next(error);
  }
};

const buildRequest = (query) => ({
  date: query.date,
  count: query.count === true,
  hasDangerousMeteors: query.hasDangerousMeteors === true,
});