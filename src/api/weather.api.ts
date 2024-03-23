// weatherApi.js
import axios from 'axios';
// @ts-ignore
import { OPEN_WEATHER_MAP_API_KEY } from '@env';

const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

export const fetchWeatherData = async (lat:number, lon:number) => {
  const response = await axiosInstance.get(`weather`, {
    params: {
      lat,
      lon,
      appid: OPEN_WEATHER_MAP_API_KEY
    }
  });
  return response.data;
};
