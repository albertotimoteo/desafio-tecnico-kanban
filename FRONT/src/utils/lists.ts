import { Lists } from '../types'

export const lists: Lists[] = ['New', 'ToDo', 'Doing', 'Done']

export const getPreviousList = (currentList: Lists) =>
  lists[lists.findIndex(list => list === currentList) - 1]
export const getNextList = (currentList: Lists) =>
  lists[lists.findIndex(list => list === currentList) + 1]
