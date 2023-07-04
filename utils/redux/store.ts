// Redux
import { configureStore } from '@reduxjs/toolkit'
import apiReducer from './apiSlice'

// TODO: https://stackoverflow.com/questions/61281070/nextjs-preload-redux-data-in-getserversideprops
// https://github.com/vercel/next.js/blob/canary/examples/with-redux-wrapper/pages/other.js
export const store = configureStore({
  reducer: {
    api: apiReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch