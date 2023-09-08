import axios from 'axios'

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/'

const getAll = () => {
    return axios
        .get(`${baseURL}all`)
        .then(response => response.data)
        .catch(err => console.log(err))
}

const exports = {getAll}

export default exports