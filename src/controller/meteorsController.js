const getMeteorsData = require('../service/meteorsService')
const {startDate, endDate} = require('../utils/dateUtil')

const getMeteors = async (req, res, next) => {
  try {
    const meteors = await getMeteorsData(startDate, endDate);
    res.json(meteors);
  } catch (error) {
    next(error);
  }
}

module.exports = getMeteors