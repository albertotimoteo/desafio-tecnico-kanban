import api from '../configuration'

export const login = () =>
  api.post('/login', {
    login: 'letscode',
    senha: 'lets@123',
  })
