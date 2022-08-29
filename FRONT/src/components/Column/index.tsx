import { Actions, CardProperties, Lists } from '../../types'
import { Card } from '../Card'
import { Container, Title } from './style'

type ColumnProps = {
  cards: CardProperties[]
  title: string
  list: Lists
  actions: Actions
}

export const Column = ({ cards, title, list, actions }: ColumnProps) => (
  <Container>
    <Title>{title}</Title>
    {list === 'New' ? (
      <Card title="" content="" list="New" isNew addCard={actions.add} />
    ) : (
      cards.map(card => (
        <Card
          key={card.id}
          title={card.titulo}
          content={card.conteudo}
          list={list}
          id={card.id}
          alterCard={actions.alter}
          deleteCard={actions.delete}
        />
      ))
    )}
  </Container>
)
