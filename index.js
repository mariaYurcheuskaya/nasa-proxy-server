const axios = require('axios');

const NASA_URL = 'https://api.nasa.gov/neo/rest/v1/feed'
const START_DATE = '2024-02-26'
const END_DATE = '2024-03-01'
const API_KEY = 'Qce19zAbTfBx8PKaGyrZ3ZFc8feagBAjlRBMg3lg'

const buildUrl = (startDate, endDate) => {
    const myUrlWithParams = new URL(NASA_URL);
    myUrlWithParams.searchParams.append("start_date", startDate);
    myUrlWithParams.searchParams.append("end_date", endDate);
    myUrlWithParams.searchParams.append("api_key", API_KEY);
    console.log(myUrlWithParams.href);
}

const printJson = (data) => {
    console.log(JSON.parse(data));
    console.log(data);
}


const getAsteroidsAmount = (startDate, endDate) => {
    axios.get(buildUrl(startDate, endDate))
        .then(printJson)
        .catch(err => console.log('Error: ', err.message))
}

getAsteroidsAmount(START_DATE, END_DATE);