import axios from 'axios';
import { env } from '../config/environment';
import { calculateDates } from '../utils/dateUtil';
import { Exception } from '../exception/Exception';
import { MeteorRequest, MeteorsData } from '../types/meteors';

export const getMeteorsData = async (request: MeteorRequest) => {
  const { startDate, endDate } = calculateDates(request.date);

  return axios
  .get(env.meteorUrl, {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: env.API_KEY
    }
  })
  .then((meteors) => processMeteorsData(meteors.data, request))
  .catch((err) => {
    throw new Exception(err.code || 500, err.message);
  });
};

const processMeteorsData = (meteorsData: MeteorsData, request: MeteorRequest) => {
  printMeteorsData(meteorsData);

  let meteors = Object.values(meteorsData.near_earth_objects).flat();

  return {
    meteors: meteors,
    hasDangerousMeteors: request.hasDangerousMeteors ? meteors.some((data) => data.is_potentially_hazardous_asteroid) : undefined,
    count: meteors.length
  };
};

const printMeteorsData = (meteorsData: MeteorsData) => {
  console.log(JSON.stringify(meteorsData, null, 2));
  console.log(`${meteorsData.element_count} of asteroids were seen were seen from Monday to Friday`);
};