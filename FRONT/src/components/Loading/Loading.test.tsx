import { render, screen } from '@testing-library/react'
import { Loading } from '.'

describe('<Loading />', () => {
  it('should render on screen', () => {
    render(<Loading />)
    const loadingDiv = screen.getByTestId('loading')

    expect(loadingDiv).toBeInTheDocument()
  })
})
