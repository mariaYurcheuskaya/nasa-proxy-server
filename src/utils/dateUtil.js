import { format, previousFriday, previousMonday } from 'date-fns';
import { constants } from '../constants/constants.js';

export const calculateDates = (userDate) => {
  const date = userDate ?? new Date();

  const fridayDate = previousFriday(date);
  const mondayDate = previousMonday(fridayDate);

  const endDate = format(fridayDate, constants.DATE_FORMAT);
  const startDate = format(mondayDate, constants.DATE_FORMAT);

  return { startDate, endDate };
};