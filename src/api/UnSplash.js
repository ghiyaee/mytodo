import axios from "axios";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 35JyjzuaPSD0ZjD1gSA-g6eicsChTCV_4s8njbKaWR8'
    }
})