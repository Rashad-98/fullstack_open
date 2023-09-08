const Country = ({country}) => {
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
            <h2>languages</h2>
            <ul>
                {Object.keys(country.languages).map((language) => {
                    return <li key={language}>{country.languages[language]}</li>
                })}
            </ul>
            <img src={country.flags.svg} alt={country.flags.alt}/>
        </div>
    )
}

export default Country