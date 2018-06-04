const API_KEY = 'f30fa7cfa91e2920be2e2450d5f00d4a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},in`
    const request = axios.get(url);

    console.log("Request", request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}