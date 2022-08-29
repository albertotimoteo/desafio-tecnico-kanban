import { useEffect, useState } from 'react'
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
      console.log(error)
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
      console.log(error)
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
      console.log(error)
    }
  }

  const excludeCard = async (id: string) => {
    try {
      const response = await deleteCard(id)
      setCards(response)
    } catch (error) {
      console.log(error)
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
    </Container>
  )
}
