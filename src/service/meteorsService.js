const axios = require("axios");

const processMeteorsData = (meteors) => {
  const data = meteors.data;
  console.log(JSON.stringify(data, null, 4));
  printAsteroidsAmount(data);
  return data;
}

const printAsteroidsAmount = (meteorsData) => {
  const amount = meteorsData.element_count;
  console.log(
      `${amount} of asteroids were seen were seen from Monday to Friday`);
}

const getMeteorsData = (startDate, endDate) => {
  const api_url = `${process.env.NASA_URL}?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.API_KEY}`;
  return axios.get(api_url)
  .then(processMeteorsData)
  .catch(err => console.log('Error: ', err.message))
}

module.exports = getMeteorsData