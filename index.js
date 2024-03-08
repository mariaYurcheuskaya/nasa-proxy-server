const axios = require('axios');

const START_DATE = '2024-02-26'
const END_DATE = '2024-03-01'


const printAsteroidsData = (asteroids) => {
    const data = asteroids.data;
    console.log(JSON.stringify(data, null, 2));
    printAsteroidsAmount(data);
}

const printAsteroidsAmount = (asteroidsData) => {
    const amount = asteroidsData.element_count;
    console.log(`${amount} of asteroids were seen were seen from Monday to Friday`);
}

const printError = (err) => {
    err => console.log('Error: ', err.message)
}

const getAsteroidsAmount = (startDate, endDate) => {
    axios.get(process.env.NASA_URL, {
        params: {
            start_date: startDate,
            end_date: endDate,
            api_key: process.env.API_KEY
        }
    })
        .then(printAsteroidsData)
        .catch(printError)
}

getAsteroidsAmount(START_DATE, END_DATE);