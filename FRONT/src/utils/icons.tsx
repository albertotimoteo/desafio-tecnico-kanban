import { GiSave } from 'react-icons/gi'
import { MdDeleteForever, MdCancel } from 'react-icons/md'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs'
import { BiEdit } from 'react-icons/bi'
import { IoMdAddCircle } from 'react-icons/io'
import { GetIconsObject } from '../types'
import { iconProps } from '../theme'

export const icons: GetIconsObject = {
  ADD: <IoMdAddCircle {...iconProps} />,
  DELETE: <MdDeleteForever {...iconProps} />,
  RIGHT: <BsFillArrowRightCircleFill {...iconProps} />,
  LEFT: <BsFillArrowLeftCircleFill {...iconProps} />,
  EDIT: <BiEdit {...iconProps} />,
  CANCEL: <MdCancel {...iconProps} />,
  SAVE: <GiSave {...iconProps} />,
}
