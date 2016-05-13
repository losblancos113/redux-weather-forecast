import axios from 'axios';

const API_KEY = '0c92687114740e3bc55b92ff89d1b17d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;
export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},vn`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
