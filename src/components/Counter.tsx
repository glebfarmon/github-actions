import {useDispatch} from 'react-redux'
import {decrement, increment} from '@/store/counter/index.slice'
import {useAppSelector} from '@/hooks/useRedux'

const Counter = () => {
  const {count} = useAppSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <div data-testid={'value-title'}>
      {count}
      <button data-testid={'increment-btn'} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button data-testid={'decrement-btn'} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}

export default Counter
