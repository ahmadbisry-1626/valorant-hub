import axios from "axios";


export const axiosInstance = axios.create({
    baseURL: process.env.GEAR_BASE_URL,
    timeout: 3000
})
