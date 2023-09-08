import axios from "axios"

const getWeatherData = (lat, lon) => {
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9f05cb3c6f8685d71665a68cc3a7210a&units=metric`)
        .then(response => response.data)
}

const getWeatherIcon = (icon) => {
    return axios
        .get(`https://openweathermap.org/img/wn/${icon}@2x.png`)
        .then(response => response.data)
}

const exports = {getWeatherData, getWeatherIcon}

export default exports