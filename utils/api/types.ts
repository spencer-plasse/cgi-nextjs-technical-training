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
 * TODO
 */
export type SpotifyArtistInfoResponseData = {
  external_urls: {
    spotify: string
  };
  followers: {
    href?: string;
    total: number;
  };
  genres: Array<string>;
  href: string;
  id: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
  }>;
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

/**
 * TODO
 */
export type SpotifyArtistInfoData = {
  name: string;
  followers: number;
  genres: Array<string>;
  url: string;
  image: {
    url: string;
    height: number;
    width: number;
  }
}