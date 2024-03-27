import 'dotenv/config';

const {
  NASA_BASE_URL,
  METEORS_URL,
  MANIFEST_URL,
  ROVER_PHOTO_URL,
  API_KEY,
  PORT,
  DSN
} = process.env;

export const env = {
  meteorUrl: `${NASA_BASE_URL}${METEORS_URL}`,
  manifestUrl: `${NASA_BASE_URL}${MANIFEST_URL}`,
  roverPhotoUrl: `${NASA_BASE_URL}${ROVER_PHOTO_URL}`,
  API_KEY,
  DSN,
  PORT
};
