/**
 * DTO type representing how the Spotify API access token is stored in Redux:
 *
 * - `"accessToken"` - Spotify API access token to make other API calls with
 * - `"tokenType"` - Type of access token
 * - `"expireTime"` - Time the access token expires (each access token is valid for 1 hour)
 */
export type SpotifyAccessTokenSliceData = {
  accessToken: string;
  tokenType: string;
  expireTime: string;
};