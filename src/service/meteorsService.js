const axios = require("axios");
const meteorMapper = require('../mapper/meteorsMapper')

const processMeteorsData = (meteors) => {
  const data = meteors.data;
  printMeteorsData(data);

  return mapMeteorsData(data.near_earth_objects)
}

const mapMeteorsData = (meteors) => {
  let meteorsArray = [];

  Object.values(meteors).forEach(meteor => {
    const meteorMapped = meteor.map(element => meteorMapper(element));
    meteorsArray.push(meteorMapped);
  });
  return meteorsArray.flat();
}

const printMeteorsData = (meteorsData) => {
  console.log(JSON.stringify(meteorsData, null, 2));
  console.log(
      `${meteorsData.element_count} of asteroids were seen were seen from Monday to Friday`);
}

const getMeteorsData = (startDate, endDate) => {
  const api_url = `${process.env.NASA_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`;
  return axios.get(api_url)
  .then(processMeteorsData)
  .catch(err => console.log('Error: ', err.message))
}

module.exports = getMeteorsData