import { configureStore } from '@reduxjs/toolkit'
import { RootSlices } from './slice'

export const createStore = () => {
  return configureStore({
    reducer: RootSlices,
  })
}

export type AppStore = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']