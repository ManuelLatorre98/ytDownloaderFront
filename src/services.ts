import axios from "axios";
import Cookies from 'js-cookie'
const cookies = Cookies.get()

const cookiesString = Object.entries(cookies).map(([key, value]) => `${key}=${value}`).join('; ')

const headers = {
  'Content-Type': 'application/json',
  'Cookie': cookiesString
}
const axiosInstance = axios.create({
  baseURL: 'https://yt-downloader-back.vercel.app',
  timeout: 60000,
  headers: headers,
  withCredentials: true
})

export default axiosInstance
