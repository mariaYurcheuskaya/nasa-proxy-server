import axios from 'axios';
import { env } from '../config/environment.js';
import { constants } from '../constants/constants.js';
import { format } from 'date-fns';

export const getRoverPhotoUrl = async () => {
  const manifestData = await getManifestData();

  const date = manifestData.photo_manifest.max_date;
  const formattedDate = format(date, constants.DATE_FORMAT);

  const roverPhotos = await getRoverData(formattedDate);

  const photos = roverPhotos.photos;
  const lastPhoto = photos.pop();

  return lastPhoto.img_src;
};

const getManifestData = async () => {
  const manifest = await axios.get(env.manifestUrl, {
    params: {
      api_key: env.API_KEY,
    },
  });
  return manifest.data;
};

const getRoverData = async (earthDate) => {
  const photos = await axios.get(env.roverPhotoUrl, {
    params: {
      earth_date: earthDate,
      api_key: env.API_KEY,
    },
  });
  return photos.data;
};