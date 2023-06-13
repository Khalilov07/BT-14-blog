import axios from "axios"

const URL_USER = "http://localhost:3001"

const addUser = (newUser) => {
    return axios.post(`${URL_USER}/users`, newUser)
}

const authUser = (user) => {
    return axios.post(`${URL_USER}/signin`, user)
}

export default { addUser, authUser }