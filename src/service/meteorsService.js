const axios = require("axios");
const meteorMapper = require('../mapper/meteorsMapper')

const processMeteorsData = (meteors) => {
  const data = meteors.data;
  printMeteorsData(data);
  return mapMeteorsData(data.near_earth_objects)
}

const mapMeteorsData = (meteors) => {
  return Object.values(meteors).flatMap(meteor => meteor.map(meteorMapper));
}

const printMeteorsData = (meteorsData) => {
  console.log(JSON.stringify(meteorsData, null, 2));
  console.log(
      `${meteorsData.element_count} of asteroids were seen were seen from Monday to Friday`);
}

const getMeteorsData = async (startDate, endDate) => {
  return axios.get(process.env.NASA_URL, {
    params: {
      start_date: startDate,
      end_date: endDate,
      api_key: process.env.API_KEY
    }
  })
  .then(processMeteorsData)
  .catch(err => {
    throw new Exception(500, err.message)
  })
}

module.exports = getMeteorsData