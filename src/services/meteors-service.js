const axios = require("axios");
const {meteorMapper} = require('../mappers')
const {NASA_URL, API_KEY} = require('../config/environment')

const getMeteorsData = async (startDate, endDate) => {
  return axios.get(NASA_URL, {
    params: {
      start_date: startDate, end_date: endDate, api_key: API_KEY
    }
  })
  .then(processMeteorsData)
  .catch(err => {
    throw new Exception(500, err.message)
  })
}
const processMeteorsData = (meteors) => {
  const data = meteors.data;
  printMeteorsData(data);
  return mapMeteorsData(data.near_earth_objects)
}

const printMeteorsData = (meteorsData) => {
  console.log(JSON.stringify(meteorsData, null, 2));
  console.log(
      `${meteorsData.element_count} of asteroids were seen were seen from Monday to Friday`);
}

const mapMeteorsData = (meteors) => {
  return Object.values(meteors)
  .flatMap(meteor => meteor.map(data => meteorMapper.mapMeteor(data)));
}

module.exports = {getMeteorsData}