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
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

	return response.json();
};

/**
 * Utility function to check whether a Spotify API access token has expired.
 * 
 * @param expireTime `expireTime` field from the Redux `apiSlice` (1 hour after access token was obtained)
 * 
 * @returns `true` if the access token has expired, `false` otherwise
 */
export const hasAccessTokenExpired = (expireTime: string) => {
  return dayjs().isAfter(dayjs(expireTime));
}

/**
 * Asynchronous wrapper function for the API call to get info on a Spotify artist.
 * 
 * @param accessToken Spotify API access token from the `accessToken` field of the Redux `apiSlice`
 * @param artistId Spotify ID of the selected artist
 * 
 * @returns Access token response data from the /api/spotify/artist_info API route
 */
export const getArtistInfo = async (accessToken: string, artistId: string) => {
  const requestURL = `/api/spotify/artist_info?${new URLSearchParams({
                        accessToken: accessToken,
                        artistId: artistId
                      }).toString()}`;
	const response = await fetch(requestURL, {method: "GET" });

	return await response.json();
};

/**
 * Asynchronous wrapper function for the API call to get a Spotify artist's top 10 songs.
 * 
 * @param accessToken Spotify API access token from the `accessToken` field of the Redux `apiSlice`
 * @param artistId Spotify ID of the selected artist
 * 
 * @returns Access token response data from the /api/spotify/artist_top_songs API route
 */
export const getArtistTop10Songs = async (accessToken: string, artistId: string) => {
  const requestURL = `/api/spotify/artist_top_songs?${new URLSearchParams({
                        accessToken: accessToken,
                        artistId: artistId
                      }).toString()}`;
  const response = await fetch(requestURL, { method: "GET" });

  return await response.json();
};

/**
 * Utility function to format a song's release date in case an entire date is not present in the
 * Spotify API response data. For example, certain songs by The Killers only contain a year.
 * 
 * @param releaseDate Song release date from the Spotify API to format
 * 
 * @return Formatted release date if the `releaseDate` parameter is a valid date, otherwise the
 *  input is returned (right now, this specifically applies to where the `releaseDate` parameter
 * is only a year).
 */
export const formatReleaseDate = (releaseDate: string) => {
  // Slightly hacky way of handling cases where the release date from the Spotify API only
  // contained a year
  if (releaseDate.length === 4 && dayjs(releaseDate, "YYYY", true).isValid()) {
    return releaseDate;
  }

  return dayjs(releaseDate).format("MMMM D, YYYY");
}