import request from '@/utils/request'
// const userInfo = (data) => request(HOST + 'kpzs/user/init', data);//用户信息
const register = (data) => request('/auth/register', data, 'post')
const getAuth = (data) => request('/auth', data)
const login = (data) => request('/auth/login', data, 'post')
const logout = (data) => request('/auth/logout', data)
export default{
  register,
  getAuth,
  login,
  logout
}

// export default function getAuth(data){
//   return request('/auth', data, 'post')
// }
