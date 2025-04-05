import axios from "axios";
let baseURL;

switch(location.hostname){
    case 'localhost':
        baseURL = 'https://sheetdb.io/api/v1/1z0f4o8a3mgf4'
        break;
    default:
        baseURL = 'Https://sheetdb.io/api/v1/1z0f4o8a3mgf4'
}

const http = axios.create({
    baseURL
})

export default http;