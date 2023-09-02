import {createSlice} from '@reduxjs/toolkit'

export interface ICounterSlice {
  count: number
}

const initialState: ICounterSlice = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1
    },
    decrement(state) {
      state.count -= 1
    }
  }
})

export const {increment, decrement} = counterSlice.actions
export const counterReducer = counterSlice.reducer
