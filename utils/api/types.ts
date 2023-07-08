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
 * - `"tokenType"` - Type of access token
 * - `"expiresIn"` - When the access token expires (each access token is valid for 1 hour)
 */
export type SpotifyAccessTokenResponseData = {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

/**
 * DTO type representing some of the response data from the "Get Artist" Spotify API endpoint.
 */
export type SpotifyArtistInfoResponseData = {
  followers: {
    total: number;
  };
  genres: Array<string>;
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
 * DTO type representing the data that is displayed on the API page for a selected artist when the
 * "Display Artist Info" button is clicked.
 */
export type SpotifyArtistInfoData = {
  followers: number;
  genres: Array<string>;
  image: {
    url: string;
    height: number;
    width: number;
  };
  name: string;
  popularity: number;
  uri: string;
}

/**
 * DTO type representing some of the response data from the "Get Artist's Top Tracks" Spotify API endpoint.
 */
export type SpotifyArtistTopSongsResponseData = Array<{
  album: {
    album_type: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
    }>;
    name: string;
    release_date: string;
    uri: string;
  };
  name: string;
  uri: string;
}>

/**
 * DTO type representing the data that is displayed on the API page for a selected artist when the
 * "Display Top 10 Songs" button is clicked.
 */
export type SpotifyArtistTopSongData = {
  album: {
    albumType: string;
    image: {
      url: string;
      width: number;
      height: number;
    };
    name: string;
    releaseDate: string;
    uri: string;
  };
  name: string;
  uri: string;
}