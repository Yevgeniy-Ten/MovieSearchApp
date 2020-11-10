import axios from "axios"

const instanse = axios.create({
    baseURL: "http://api.tvmaze.com"
})

export const getRequest = (uri = "") => {
    return instanse.get(uri)
}
export default instanse