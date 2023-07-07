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
 * - Eagles
 * - Eric Church
 * - George Strait
 * - Grizfolk
 * - Taylor Swift
 * - Twenty One Pilots
 * - The Killers
 * - Weezer
 */
export const SPOTIFY_ARTIST_IDS = [
	{
			name: "Eagles",
			id: "0ECwFtbIWEVNwjlrfc6xoL"
	},
	{
			name: "Eric Church",
			id: "2IvkS5MXK0vPGnwyJsrEyV"
	},
	{
			name: "George Strait",
			id: "5vngPClqofybhPERIqQMYd"
	},
	{
			name: "Grizfolk",
			id: "6Xa4nbrSTfbioA4lLShbjh"
	},
	{
			name: "Taylor Swift",
			id: "06HL4z0CvFAxyc27GXpf02"
	},
	{
			name: "Twenty One Pilots",
			id: "3YQKmKGau1PzlVlkL1iodx"
	},
	{
			name: "The Killers",
			id: "0C0XlULifJtAgn6ZNCW2eu"
	},
	{
			name: "Weezer",
			id: "3jOstUTkEu2JkjvRdBA5Gu"
	}
]

/**
 * Data to initialize response variables with before access token response data from the Spotify API. 
 */
export const SPOTIFY_ACCESS_TOKEN_RESPONSE_DATA_INIT = {
	accessToken: "",
	tokenType: "",
	expiresIn: -1
}