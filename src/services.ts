import axios from "axios";
import https from "https";
const headers = {
  'Content-Type': 'application/json',
}
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})
const axiosInstance = axios.create({
  baseURL: 'https://127.0.0.1:5000',
  timeout: 60000,
  headers: headers,
  withCredentials: false,
  httpsAgent: httpsAgent,
  proxy:false
})

export default axiosInstance
