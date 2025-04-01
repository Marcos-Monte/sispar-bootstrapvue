import axios from "axios";
let baseURL;

switch(location.hostname){
    case 'localhost':
        baseURL = 'https://sheetdb.io/api/v1/vlu0456nxloq8'
        break;
    default:
        baseURL = 'https://sheetdb.io/api/v1/vlu0456nxloq8'
}

const http = axios.create({
    baseURL
})

export default http;