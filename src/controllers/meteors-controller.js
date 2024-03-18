const { meteorsService } = require('../services');

const getMeteors = async (req, res, next) => {
  try {
    const request = buildRequest(req.query);

    const meteors = await meteorsService.getMeteorsData(request);
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

module.exports = { getMeteors };
