// Redux
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Types
import { SpotifyAccessTokenSliceData } from '../api/types'

// Definition of initial state prior to obtaining a Spotify API access token
const initialState: SpotifyAccessTokenSliceData = {
    accessToken: "",
    tokenType: "",
    expireTime: ""
}

/**
 * TODO
 */
export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    /**
     * Reducer function to save new access token data if an access token has not yet been obtained
     * or the current one has expired.
     * 
     * @param state Current state of the apiSlice access token data
     * @param action `PayloadAction` containing `SpotifyAccessTokenSliceData` to set the new access token with
     */
    refreshAccessToken: (state, action: PayloadAction<SpotifyAccessTokenSliceData>) => {
      state = {...action.payload}
    }
  },
})

export const { refreshAccessToken } = apiSlice.actions
export default apiSlice.reducer