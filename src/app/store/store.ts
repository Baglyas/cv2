import { configureStore, createReducer } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,

  },
})