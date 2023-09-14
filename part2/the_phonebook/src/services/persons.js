import axios from "axios";

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
    return axios
        .get(baseUrl)
        .then(response => response.data)
}

const create = (person) => {
    return axios
        .post(baseUrl, person)
        .then(response => response.data)
}

const remove = (id) => {
    return axios
        .delete(`${baseUrl}/${id}`)
}

const change = (id, person) => {
    return axios
        .put(`${baseUrl}/${id}`, person)
}

const exports = {getAll, create, remove, change}

export default exports