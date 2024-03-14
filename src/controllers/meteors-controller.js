const { meteorsService } = require('../services');

const getMeteors = async (req, res, next) => {
  try {
    const request = buildRequest(req.query);

    const meteors = await meteorsService.getMeteorsData(request);
    res.json(meteors);
  } catch (error) {
    next(error);
  }
};

const buildRequest = (query) => ({
  date: query.date,
  count: query.count === 'true',
  hasDangerousMeteors: query.were_dangerous_meteors === 'true'
});

module.exports = { getMeteors };
