const {previousFriday, previousMonday, format} = require('date-fns');

const DATE_FORMAT = 'yyyy-MM-dd';

const fridayDate = previousFriday(new Date());
const mondayDate = previousMonday(fridayDate);

const endDate = format(fridayDate, DATE_FORMAT);
const startDate = format(mondayDate, DATE_FORMAT);

module.exports = {endDate, startDate}