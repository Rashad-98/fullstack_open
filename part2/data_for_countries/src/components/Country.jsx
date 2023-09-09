import { useState, useEffect } from 'react'
import weatherService from '../services/weather'

const Country = ({country}) => {
    const [weatherData, setWeatherData] = useState({})
    const [lat, lon] = country.latlng
    const [image, setImage] = useState({})
    useEffect(() => {
        weatherService.getWeatherData(lat, lon).then(data => {
            const image = {
                src: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                alt: data.weather[0].description
            }
            setImage(image)
            setWeatherData(data)
        })
    }, [lat, lon])

    if(country === undefined) return null

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>
                capital {country.capital}
            </div>
            <div>
                area {country.area}
            </div>
            <h3>languages</h3>
            <ul>
                {Object.keys(country.languages).map((language) => {
                    return <li key={language}>{country.languages[language]}</li>
                })}
            </ul>
            <img src={country.flags.svg} alt={country.flags.alt}/>
            <h2>weather in {country.capital}</h2>
            <div>
                temperature {weatherData.main ? weatherData.main.temp : '--'} Celcius 
            </div>
            <img src={image.src} alt={image.alt}/>
            <div>
                wind {weatherData.main ? weatherData.wind.speed : '--'} m/s
            </div>
        </div>
    )
}

export default Country