// Dates
import dayjs from "dayjs";

// Constants
import { LOCAL_URL } from "../constants";

/**
 * Asynchronous wrapper function for the API call to obtain a Spotify API access token.
 * 
 * @returns Access token response data from the /api/spotify/access_token API route
 */
export const obtainAccessToken = async () => {
	const response = await fetch(`${LOCAL_URL}/api/spotify/access_token`, {
		method: "GET"
	});

	return response.json();
};

/**
 * Utility function to check whether a Spotify API access token has expired.
 * 
 * @param expire_time `expire_time` field from the Redux `apiSlice` (1 hour after access token was obtained)
 * 
 * @returns `true` if the access token has expired, `false` otherwise
 */
export const hasAccessTokenExpired = (expire_time: string) => {
  return dayjs().isAfter(dayjs(expire_time));
}

/**
 * Asynchronous wrapper function for the API call to get info on a Spotify artist.
 * 
 * @returns Access token response data from the /api/spotify/artist_info API route
 */
export const getArtistInfo = async () => {
	const response = await fetch(`${LOCAL_URL}/api/spotify/artist_info`, {
		method: "GET"
	});

	return response.json();
};

/**
 * Asynchronous wrapper function for the API call to get a Spotify artist's top 10 songs.
 * 
 * @returns Access token response data from the /api/spotify/artist_top_songs API route
 */
export const getArtistTop10Songs = async () => {
	const response = await fetch(`${LOCAL_URL}/api/spotify/artist_top_songs`, {
		method: "GET"
	});

	return response.json();
};