import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {counterReducer} from './counter/index.slice'

const rootReducer = combineReducers({
  counter: counterReducer
})

export const makeStore = (initialState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  })

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
