import { useState, useEffect } from "react"
import Country from "./Country"

const CountryView = ({countries, searchTerm}) => {
    const [countriesToShow, setCountriesToShow] = useState([]);
    
    useEffect(() => {
        setCountriesToShow(countries)
    }, [countries])

    if(countriesToShow.length === 1) {
        return <Country country={countriesToShow[0]}/>
    }

    const showCountry = (event) => {
        setCountriesToShow([countries.find(country => country.name.common === event.target.parentElement.id)])
    }

    return (
        <>
            {countriesToShow.map(country => {
                return (
                    <div key={country.name.common} id={country.name.common}>
                        <span>{country.name.common} </span>
                        <button onClick={showCountry}>show</button>
                    </div>
                )
            })}
        </>
    )
}

export default CountryView