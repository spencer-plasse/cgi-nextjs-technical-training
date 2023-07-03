// Redux
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Types
import { SpotifyAccessTokenResponseData, SpotifyAccessTokenSliceData } from '../api/types'

// Definition of initial state prior to obtaining a Spotify API access token
const initialState: SpotifyAccessTokenSliceData = {
    access_token: "",
    token_type: "",
    expire_time: -1
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
     * @param action `PayloadAction` containing `SpotifyAccessTokenResponseData` to set the new access token with
     */
    refreshAccessToken: (state, action: PayloadAction<SpotifyAccessTokenResponseData>) => {
        // TODO: If the current access token is expired, refresh it
    }
  },
})

export const { refreshAccessToken } = apiSlice.actions
export default apiSlice.reducer