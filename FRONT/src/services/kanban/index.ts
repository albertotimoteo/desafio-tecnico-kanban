import { Card } from '../../types'
import api from '../configuration'

export const getCards = () => api.get('/cards')

export const addCard = (cardInfo: Card) => api.post('/cards', cardInfo)

export const changeCard = (cardInfo: Card) =>
  api.put(`/cards/${cardInfo.id}`, cardInfo)

export const deleteCard = (id: string) => api.delete(`/cards/${id}`)
