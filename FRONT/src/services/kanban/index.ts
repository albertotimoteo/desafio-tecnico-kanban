import { CardProperties } from '../../types'
import api from '../configuration'

export const getCards = (): Promise<CardProperties[]> =>
  api.get('/cards').then(response => response.data)

export const addCard = (
  cardInfo: Pick<CardProperties, 'titulo' | 'lista' | 'conteudo'>
): Promise<CardProperties> =>
  api.post('/cards', cardInfo).then(response => response.data)

export const changeCard = (cardInfo: CardProperties): Promise<CardProperties> =>
  api.put(`/cards/${cardInfo.id}`, cardInfo).then(response => response.data)

export const deleteCard = (id: string): Promise<CardProperties[]> =>
  api.delete(`/cards/${id}`).then(response => response.data)
