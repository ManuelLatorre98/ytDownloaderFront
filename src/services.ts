import axios from "axios";
const headers = {
  'Content-Type': 'application/json',
}
const axiosInstance = axios.create({
  baseURL: 'https://yt-downloader-back.vercel.app',
  timeout: 60000,
  headers: headers,
  withCredentials: true
})

export default axiosInstance
