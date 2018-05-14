import axios from 'axios'

axios.defaults.baseURL = 'http://note-server.hunger-valley.com'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
axios.defaults.withCredentials = true

export default function request(url, data = {}, method = 'GET') {
  return new Promise((resolve, reject) => {
    const options = {
      url,
      method,
      validataStatus(status) {
        return (status >= 2000 && status < 300 || status === 400)
      }
    }
    if (method.toLowerCase === 'get') {
      options.params = data
    } else {
      options.data = data
    }
    axios(options).then(res => {
      console.log(res)
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(error => {
      reject(error)
      console.error(error)
    })
  })
}
