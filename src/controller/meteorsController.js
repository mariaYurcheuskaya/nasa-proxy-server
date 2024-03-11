const getMeteorsData = require('../service/meteorsService')
const {startDate, endDate} = require('../utils/dateUtil')

const getMeteors = async (req, res) => {
  try {
    const meteors = await getMeteorsData(startDate, endDate);
    res.status(200).json(meteors);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = getMeteors