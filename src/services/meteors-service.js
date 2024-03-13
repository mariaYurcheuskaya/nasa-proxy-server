const axios = require("axios");
const {meteorMapper} = require('../mappers')
const {NASA_URL, API_KEY} = require('../config/environment')
const {calculateDates} = require('../utils/dateUtil')

const getMeteorsData = async (request) => {
  const {startDate, endDate} = calculateDates(request.date);

  return axios.get(NASA_URL, {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: API_KEY
    }
  })
  .then(data => processMeteorsData(data, request))
  .catch(err => {
    throw new Exception(500, err.message)
  })
}

const processMeteorsData = (meteors, request) => {
  const data = meteors.data;
  printMeteorsData(data);

  let transformedData = mapMeteorsData(data.near_earth_objects);

  let response = {meteors: transformedData};

  if (request.hasDangerousMeteors) {
    response.wereDangerousMeteors = transformedData.some(
        data => data.is_potentially_hazardous_asteroid);
  }

  if (request.count) {
    response.count = transformedData.length;
  }

  return response;
}

const mapMeteorsData = (meteors) => {
  return Object.values(meteors)
  .flatMap(meteor => meteor.map(data => meteorMapper.mapMeteor(data)));
}

const printMeteorsData = (meteorsData) => {
  console.log(JSON.stringify(meteorsData, null, 2));
  console.log(
      `${meteorsData.element_count} of asteroids were seen were seen from Monday to Friday`);
}

module.exports = {getMeteorsData}