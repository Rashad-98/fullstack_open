import axios from "axios"

const getWeatherData = (lat, lon) => {
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_open_weather_map_key}&units=metric`)
        .then(response => response.data)
}

const getWeatherIcon = (icon) => {
    return axios
        .get(`https://openweathermap.org/img/wn/${icon}@2x.png`)
        .then(response => response.data)
}

const exports = {getWeatherData, getWeatherIcon}

export default exports