import axios from "axios";

const URL = "http://localhost:3001/courses"

const getData = () => {
    return axios.get(URL)
}

const postData = (newPost) => {
    return axios.post(URL, newPost)
}

const changeData = (newChange, id) => {
    return axios.put(`${URL}/${id}`, newChange)
}

const deletePost = (id) => {
    return axios.delete(`${URL}/${id}`)
}

export default { getData, postData, changeData, deletePost }