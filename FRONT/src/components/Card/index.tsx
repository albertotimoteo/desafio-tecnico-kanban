import { useEffect, useRef, useState } from 'react'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import {
  AddCardFunction,
  AlterCardFunction,
  CardMode,
  DeleteCardFunction,
  Lists,
} from '../../types'
import { getNextList, getPreviousList } from '../../utils/lists'
import { CardFooter } from '../CardFooter'
import { IconButton } from '../IconButton'
import {
  Container,
  Content,
  ContentTextArea,
  HeaderFooter,
  Title,
  TitleInput,
} from './style'

type CardProps = {
  title: string
  content: string
  list: Lists
  id?: string
  alterCard?: AlterCardFunction
  deleteCard?: DeleteCardFunction
  addCard?: AddCardFunction
  isNew?: boolean
}

export const Card = ({
  title,
  content,
  list,
  id,
  alterCard,
  deleteCard,
  addCard,
  isNew,
}: CardProps) => {
  const [mode, setMode] = useState<CardMode>('VIEW')
  const [titleEdit, setTitleEdit] = useState(title)
  const [contentEdit, setContentEdit] = useState(content)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current && content) {
      contentRef.current.innerHTML = DOMPurify.sanitize(marked.parse(content))
    }
  }, [content, mode])

  return (
    <Container>
      <HeaderFooter>
        {mode === 'EDIT' || isNew ? (
          <TitleInput
            value={titleEdit}
            onChange={event => setTitleEdit(event.target.value)}
          />
        ) : (
          <>
            <Title>{title}</Title>
            <IconButton icon="EDIT" onClick={() => setMode('EDIT')} />
          </>
        )}
      </HeaderFooter>
      {mode === 'EDIT' || isNew ? (
        <ContentTextArea
          value={contentEdit}
          onChange={event => setContentEdit(event.target.value)}
        />
      ) : (
        <Content ref={contentRef}></Content>
      )}
      <HeaderFooter>
        <CardFooter
          isNew={Boolean(isNew)}
          mode={mode}
          list={list}
          onClickRight={() =>
            alterCard && alterCard(title, content, getNextList(list), id ?? '')
          }
          onClickLeft={() =>
            alterCard &&
            alterCard(title, content, getPreviousList(list), id ?? '')
          }
          onClickDelete={() => deleteCard && deleteCard(id ?? '')}
          onClickAdd={() => {
            addCard && addCard(titleEdit, contentEdit)
            setTitleEdit('')
            setContentEdit('')
          }}
          onClickSave={() => {
            alterCard && alterCard(titleEdit, contentEdit, list, id ?? '')
            setMode('VIEW')
          }}
          onClickCancel={() => setMode('VIEW')}
        />
      </HeaderFooter>
    </Container>
  )
}
