import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { IconButton } from '.'

describe('<IconButton />', () => {
  const mockOnClick = jest.fn()
  it('should render on screen', () => {
    render(<IconButton icon="ADD" onClick={mockOnClick} />)

    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
  })

  it('should run function when clicked', () => {
    render(<IconButton icon="ADD" onClick={mockOnClick} />)

    const button = screen.getByTestId('button')
    userEvent.click(button)

    expect(mockOnClick).toBeCalledOnce()
  })
})
