import fetchHelper from './fetchHelper';
import {BASE_URL, API_KEY} from '@env';

export const getCurrentTemprature = async (lat, lon) => {
  const url = `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const config = {
    method: 'GET',
  };
  const response = await fetchHelper(fetch, url, config);
  return response;
};
