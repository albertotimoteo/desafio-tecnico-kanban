import { Lists } from '../../types'
import { IconButton } from '../IconButton'

type CardFooterProps = {
  isNew: boolean
  mode: 'VIEW' | 'EDIT'
  list: Lists
  onClickRight: () => void
  onClickLeft: () => void
  onClickDelete: () => void
  onClickAdd: () => void
  onClickSave: () => void
  onClickCancel: () => void
}

export const CardFooter = ({
  isNew,
  mode,
  list,
  onClickRight,
  onClickLeft,
  onClickDelete,
  onClickAdd,
  onClickSave,
  onClickCancel,
}: CardFooterProps) => {
  if (isNew) {
    return (
      <>
        <IconButton icon="ADD" onClick={onClickAdd} />
      </>
    )
  }
  if (mode === 'VIEW') {
    return (
      <>
        {list !== 'ToDo' ? (
          <IconButton icon="LEFT" onClick={onClickLeft} />
        ) : (
          <div />
        )}
        <IconButton icon="DELETE" onClick={onClickDelete} />
        {list !== 'Done' ? (
          <IconButton icon="RIGHT" onClick={onClickRight} />
        ) : (
          <div />
        )}
      </>
    )
  }

  return (
    <>
      <IconButton icon="CANCEL" onClick={onClickCancel} />
      <IconButton icon="SAVE" onClick={onClickSave} />
    </>
  )
}
