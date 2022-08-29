import { render, screen } from '@testing-library/react'

import { Column } from '.'

describe('<Column />', () => {
  const addActionMock = jest.fn()
  const deleteActionMock = jest.fn()
  const alterActionMock = jest.fn()
  const actions = {
    add: addActionMock,
    alter: alterActionMock,
    delete: deleteActionMock,
  }

  it('should render on screen', () => {
    render(<Column cards={[]} title="To Do" list="ToDo" actions={actions} />)

    const title = screen.getByText('To Do')

    expect(title).toBeInTheDocument()
  })
})
