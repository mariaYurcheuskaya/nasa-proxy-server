const getMeteorsData = require('../service/meteorsService')
const {previousFriday, previousMonday, format} = require('date-fns');

const endDate = previousFriday(new Date());
const startDate = previousMonday(endDate)

const endDateFormatted = format(endDate, process.env.DATE_FORMAT)
const startDateFormatted = format(startDate, process.env.DATE_FORMAT)

const getMeteors = async (req, res) => {
  const meteors = await getMeteorsData(startDateFormatted, endDateFormatted);
  res.status(200).json(meteors)
}

module.exports = getMeteors