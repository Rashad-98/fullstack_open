import Country from "./Country"

const CountryView = ({countries, searchTerm}) => {
    if (countries.length === 1) {
        return <Country country={countries[0]}/>
    } else if(countries.length <= 3) {
        const regex = new RegExp(`^${searchTerm}$`, 'i')
        const filteredCountry = countries.find(country => regex.test(country.name.common))
        if(filteredCountry !== undefined) return <Country country={filteredCountry}/>
    }
    return (
        <>
            {countries.map(country => {
                return <div key={country.name.common}>{country.name.common}</div>
            })}
        </>
    )
}

export default CountryView