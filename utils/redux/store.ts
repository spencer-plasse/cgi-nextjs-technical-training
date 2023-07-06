// Redux
import { configureStore } from '@reduxjs/toolkit'
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import apiReducer from './apiSlice'

// Types
import { SpotifyAccessTokenSliceData } from '../api/types';

// Workaround for using Redux in Next.js server-side code. createStore is called in
// the front-end page/component code and initialized with data passed back from the
// server-side code (ex. getServerSideProps).
// See: https://github.com/vercel/next.js/discussions/20122
let store: ToolkitStore;

const createStore = (preloadedState: SpotifyAccessTokenSliceData) => {
  if (typeof window === 'undefined') {
    return configureStore({
      reducer: { 
        apiReducer
      },
      preloadedState: {
        apiReducer: {
          ...preloadedState
        }
      }
    });
  }

  if (!store) {
    store = configureStore({
      reducer: { 
        apiReducer
      },
      preloadedState: {
        apiReducer: {
          ...preloadedState
        }
      },
    });
  }

  return store;
};

export default createStore;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch