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
 * - `"access_token"` - Spotify API access token to make other API calls with
 * - `"token_type"` - Type of access token
 * - `"expires_in"` - When the access token expires (each access token is valid for 1 hour)s
 */
export type SpotifyAccessTokenResponseData = {
  access_token: string;
  token_type: string;
  expires_in: number;
}

/**
 * DTO type representing how the Spotify API access token is stored in Redux:
 * 
 * - `"access_token"` - Spotify API access token to make other API calls with
 * - `"token_type"` - Type of access token
 * - `"expire_time"` - Time the access token expires (each access token is valid for 1 hour)
 */
export type SpotifyAccessTokenSliceData = {
  access_token: string;
  token_type: string;
  expire_time: any; // TODO: Specific datetime format
}