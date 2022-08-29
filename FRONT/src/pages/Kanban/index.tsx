import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import { Column } from '../../components/Column'
import {
  addCard,
  changeCard,
  deleteCard,
  getCards,
} from '../../services/kanban'
import { CardProperties, GetTitlesOjbect, Lists } from '../../types'
import { lists } from '../../utils/lists'
import { Container } from './style'

import 'react-toastify/dist/ReactToastify.css'

const titles: GetTitlesOjbect = {
  New: 'Novo',
  ToDo: 'To Do',
  Doing: 'Doing',
  Done: 'Done',
}

export const Kanban = () => {
  const [cards, setCards] = useState<CardProperties[]>([])
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false)

  const fetchCards = async () => {
    try {
      const response = await getCards()
      setCards(response)
    } catch (error) {
      toast.error('Erro ao buscar os cards da api.')
    }
  }

  useEffect(() => {
    if (!cards.length && !hasFetchedOnce) {
      setHasFetchedOnce(true)
      fetchCards()
    }
  }, [cards.length, hasFetchedOnce])

  const addNewCard = async (title: string, content: string) => {
    try {
      await addCard({
        titulo: title,
        conteudo: content,
        lista: 'ToDo',
      })
      fetchCards()
    } catch (error) {
      toast.error(
        'Erro ao adicionar o card. Confira os dados e tente novamente.'
      )
    }
  }

  const alterCard = async (
    title: string,
    content: string,
    list: Lists,
    id: string
  ) => {
    try {
      await changeCard({
        id,
        titulo: title,
        conteudo: content,
        lista: list,
      })
      fetchCards()
    } catch (error) {
      toast.error('Erro ao alterar o card. Confira os dados e tente novamente.')
    }
  }

  const excludeCard = async (id: string) => {
    try {
      const response = await deleteCard(id)
      setCards(response)
    } catch (error) {
      toast.error('Erro ao deletar o card. Aguarde um pouco e tente novamente.')
    }
  }

  return (
    <Container>
      {lists.map((list: Lists) => (
        <Column
          cards={cards.filter(card => card.lista === list)}
          title={titles[list]}
          list={list}
          actions={{
            add: addNewCard,
            alter: alterCard,
            delete: excludeCard,
          }}
        />
      ))}
      <ToastContainer position="bottom-right" />
    </Container>
  )
}
