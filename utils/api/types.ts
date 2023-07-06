/**
 * DTO type representing the response that will be sent back to the index.tsx contact form:
 * 
 * - `"message"` - String message to display on the contact form when the API call is successful
 */
export type ContactFormResponseData = {
  message: string;
};

/**
 * DTO type representing the Spotify API response with access token data:
 * 
 * - `"accessToken"` - Spotify API access token to make other API calls with
 * - `"accessToken"` - Type of access token
 * - `"expiresIn"` - When the access token expires (each access token is valid for 1 hour)
 */
export type SpotifyAccessTokenResponseData = {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

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
}