import {render, screen} from '@testing-library/react'
import UserProfile from '@/components/UserProfile'

describe('UserProfile - Rendering', () => {
  it('Test adult', () => {
    render(<UserProfile name={'Hlib'} surname={'Ilnytsky'} age={18} />)
    expect(screen.getByText(/Is adult: Yes/i)).toBeInTheDocument()
  })
})
