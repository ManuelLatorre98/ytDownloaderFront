import axios from "axios";
import https from "https";
const headers = {
  'Content-Type': 'application/json',
}
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})
const axiosInstance = axios.create({
  baseURL: 'https://yt-downloader-back.vercel.app/',
  timeout: 60000,
  headers: headers,
  withCredentials: false,
  httpsAgent: httpsAgent,
  proxy:false
})

export default axiosInstance
