import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./fetures/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch