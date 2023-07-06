/** Constant to represent the specific user's Spotify API client id when running locally. */
export const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;

/** Constant to represent the specific user's Spotify API client secret when running locally. */
export const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

/**
 * Object mapping artist names (that are present in the spotify_api page Artist dropdown list)
 * to their respective Spotify artist IDs that are required for API calls on artist data.
 * 
 * Currently-supported artists:
 * 
 * - Twenty One Pilots
 * - The Killers
 * - Weezer
 */
export const SPOTIFY_ARTIST_IDS = {
    "Twenty One Pilots": "3YQKmKGau1PzlVlkL1iodx",
    "The Killers": "0C0XlULifJtAgn6ZNCW2eu",
    "Weezer": "3jOstUTkEu2JkjvRdBA5Gu"
}

/**
 * 
 */
export const SPOTIFY_ACCESS_TOKEN_RESPONSE_DATA_INIT = {
    accessToken: "",
    tokenType: "",
    expiresIn: -1
}