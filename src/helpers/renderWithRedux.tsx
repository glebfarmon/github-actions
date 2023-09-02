import {Provider} from 'react-redux'
import {makeStore, RootState} from '@/store'
import {render} from '@testing-library/react'
import {ReactNode} from 'react'

export const renderWithRedux = (component: ReactNode, initialState?: RootState) => {
  return render(<Provider store={makeStore(initialState)}>{component}</Provider>)
}
