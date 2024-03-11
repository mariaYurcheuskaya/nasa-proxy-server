const {previousFriday, previousMonday, format} = require('date-fns');

const fridayDate = previousFriday(new Date());
const mondayDate = previousMonday(fridayDate)

const endDate = format(fridayDate, process.env.DATE_FORMAT)
const startDate = format(mondayDate, process.env.DATE_FORMAT)

module.exports = {endDate, startDate}