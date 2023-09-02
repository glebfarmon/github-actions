import {counterReducer, decrement, increment} from '@/store/counter/index.slice'

describe('Counter', () => {
  it('Increment store', () => {
    expect(counterReducer({count: 0}, increment())).toEqual({count: 1})
  })
  it('Decrement store', () => {
    expect(counterReducer({count: 0}, decrement())).toEqual({count: -1})
  })
  it('Empty state', () => {
    expect(counterReducer(undefined, increment())).toEqual({count: 1})
    expect(counterReducer(undefined, decrement())).toEqual({count: -1})
  })
})
