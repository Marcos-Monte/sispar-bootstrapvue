import axios from "axios";

console.log(process.env.VUE_APP_API_URL)

let baseURL = process.env.VUE_APP_API_URL;

const http = axios.create({
    baseURL,
})

export default http;