import axios from 'axios'

const API_KEY = "46677924c0d26809ca62192b59e9fc30"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

export function getWeatherData(city){
    return axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
}