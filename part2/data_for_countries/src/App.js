import { useState, useEffect } from "react";
import countriesService from "./services/countries";
import CountryView from "./components/CountriesView";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCounties] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    if(event.target.value === '') return setFilteredCountries([])
    const filteredCountries = countries.filter((country) => {
      const regexp = new RegExp(event.target.value, 'gi')
      const name = country.name.common
      return name.match(regexp) !== null ? true : false
    })
    setFilteredCountries(filteredCountries)
  }

  useEffect(() => {
    countriesService
      .getAll()
      .then(data => setCounties(data))
  }, [])

  return (
    <div>
      <label htmlFor='search-field'>find countries </label>
      <input id='search-field' value={searchTerm} onChange={handleChange}/>
      <CountryView countries={filteredCountries} searchTerm={searchTerm}/>
    </div>
  )
}

export default App;
