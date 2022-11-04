import axios from 'axios'

// export const DilyorApiService= 'http://192.168.112:8080'
// export const BoburApiService= 'http://192.168.106:8080'
const herokuApiService = 'https://tashkec.herokuapp.com'

const httpClient = axios.create({
  baseURL: herokuApiService,
})

httpClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)

httpClient.interceptors.request.use((config) => {
  if (config.url) {
    config.url = `/api${config.url}`
  }
  return config
})

export default httpClient
