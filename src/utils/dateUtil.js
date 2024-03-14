const { previousFriday, previousMonday, format } = require('date-fns');
const { DATE_FORMAT } = require('../constants/constants');

const calculateDates = (userDate) => {
  const date = userDate ?? new Date();

  const fridayDate = previousFriday(date);
  const mondayDate = previousMonday(fridayDate);

  const endDate = format(fridayDate, DATE_FORMAT);
  const startDate = format(mondayDate, DATE_FORMAT);

  return { startDate, endDate };
};

module.exports = { calculateDates };
