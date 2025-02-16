import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://yt-downloader-back.vercel.app',
  timeout: 60000,
  headers: {'Content-Type': 'application/json'},
  withCredentials: true
})

export default axiosInstance
