export type CardProperties = {
  id: string
  titulo: string
  conteudo: string
  lista: string
}

export type Icons =
  | 'ADD'
  | 'DELETE'
  | 'RIGHT'
  | 'LEFT'
  | 'EDIT'
  | 'CANCEL'
  | 'SAVE'

export type CardMode = 'EDIT' | 'VIEW'

export type Lists = 'New' | 'ToDo' | 'Doing' | 'Done'

export type AddCardFunction = (title: string, content: string) => void

export type AlterCardFunction = (
  title: string,
  content: string,
  list: Lists,
  id: string
) => void

export type DeleteCardFunction = (id: string) => void

export type GetIconsObject = {
  [key in Icons]: JSX.Element
}

export type GetTitlesOjbect = {
  [key in Lists]: string
}

export type Actions = {
  add: AddCardFunction
  alter: AlterCardFunction
  delete: DeleteCardFunction
}
