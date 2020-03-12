import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://210.4.64.57:8082/`
  })
}
