import axios from 'axios';

const baseUrl = 'http://localhost:3000'

const api = axios.create({
  baseURL: baseUrl
})
// ---------------- Auth Info ---------------------

const getToken = () => {
  const token = localStorage.getItem('jwt');
  api.defaults.headers.common.authorization = `Bearer ${token}`;
}

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  return resp.data
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/users/verify');
    return resp.data
  }
  return false;
}


const readAllUsers = async () => {
  const resp = await api.get('/users')
  return resp.data
}

// ---------------- (HOME )Sneakers ---------------------

const readAllSneakers = async () => {
  const resp = await api.get('/sneakers')
  return resp.data
}
//------------------ Collection Page ---------------------
const readAllCollects = async () => {
  const resp = await api.get('/collects')
  return resp.data
}

const createCollect = async (data) => {
  getToken();
  const resp = await api.post('/collects', { collect: data })
  return resp.data
}

const updateCollect = async (id, data) => {
  getToken();
  const resp = await api.put(`/collects/${id}`, { collect: data })
  return resp.data
}

const destroyCollect = async (id) => {
  getToken();
  const resp = await api.delete(`/collects/${id}`)
  return resp.data
}


export {
  readAllUsers,
  readAllSneakers,
  readAllCollects,
  createCollect,
  updateCollect,
  destroyCollect,
}