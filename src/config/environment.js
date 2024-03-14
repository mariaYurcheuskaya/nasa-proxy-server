require('dotenv').config();

const { NASA_BASE_URL, METEORS_URL, MANIFEST_URL, ROVER_PHOTO_URL, API_KEY, PORT } = process.env;

module.exports = {
  NASA_BASE_URL,
  METEORS_URL,
  MANIFEST_URL,
  ROVER_PHOTO_URL,
  API_KEY,
  PORT,
};
