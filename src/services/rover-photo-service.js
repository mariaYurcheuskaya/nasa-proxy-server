const axios = require('axios');
const { manifestUrl, roverPhotoUrl, API_KEY } = require('../config/environment');
const { DATE_FORMAT } = require('../constants/constants');
const { format } = require('date-fns');

const getRoverPhotoUrl = async () => {
  const manifestData = await getManifestData();

  const date = manifestData.photo_manifest.max_date;
  const formattedDate = format(date, DATE_FORMAT);

  const roverPhotos = await getRoverData(formattedDate);

  const photos = roverPhotos.photos;
  const lastPhoto = photos.pop();

  return lastPhoto.img_src;
};

const getManifestData = async () => {
  const manifest = await axios.get(manifestUrl, {
    params: {
      api_key: API_KEY,
    },
  });
  return manifest.data;
};

const getRoverData = async (earthDate) => {
  const photos = await axios.get(roverPhotoUrl, {
    params: {
      earth_date: earthDate,
      api_key: API_KEY,
    },
  });
  return photos.data;
};

module.exports = { getRoverPhotoUrl };
