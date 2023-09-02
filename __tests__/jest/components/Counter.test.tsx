import {renderWithRedux} from '@/helpers/renderWithRedux'
import Counter from '@/components/Counter'
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('UserProfile', () => {
  test('Test router', () => {
    renderWithRedux(<Counter />, {counter: {count: 5}})
    const incrementBtn = screen.getByTestId('increment-btn')
    const decrementBtn = screen.getByTestId('decrement-btn')
    expect(screen.getByTestId('value-title')).toHaveTextContent('5')
    userEvent.click(incrementBtn).then()
  })
})
