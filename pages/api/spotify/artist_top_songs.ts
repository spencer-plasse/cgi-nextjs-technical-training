// Next.js
import type { NextApiRequest, NextApiResponse } from 'next'

// Types
import { SpotifyArtistTopSongData, SpotifyArtistTopSongsResponseData } from '../../../utils/api/types';

/**
 * Handler for an API route to obtain data on a selected artist for on the spotify_api.tsx page.
 * This data includes artist name (which links to the artist's Spotify page via a URI), follower
 * count, genres, popularity, and Spotify profile picture.
 * 
 * @link Spotify API Get Artist's Top Tracks documentation:
 * https://developer.spotify.com/documentation/web-api/reference/get-an-artists-top-tracks
 * 
 * @param _ Placeholder for an unused `NextApiRequest` object
 * @param res `NextApiResponse` object containing the response data from the Spotify API
 * 
 * @returns JSON response of either success or error from the Spotify API
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<SpotifyArtistTopSongData>>
) {
  // A non-expired access token will be required to execute any other Spotify API calls
  if (!req.query["accessToken"] || !req.query["artistId"]) {
    res.status(401); // 401: Unauthorized
    return res;
  }

  try {
    const accessToken = req.query["accessToken"];
    const artistId = req.query["artistId"];
    const requestURL = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?${new URLSearchParams({market: "US"})}`;

    const response = await fetch(requestURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    });

    // If the response was anything but successful, clone the code to the response back to the caller
    if (!response.ok) {
      res.status(response.status);
      return res;
    }

    const artistTopSongsData: {
      tracks: SpotifyArtistTopSongsResponseData
    } = await response.json();

    if (artistTopSongsData) {
      res.status(200).json(artistTopSongsData.tracks.map(song => {
        return {
          album: {
            albumType: song.album.album_type,
            image: song.album.images[song.album.images.length -1],
            name: song.album.name,
            releaseDate: song.album.release_date,
            uri: song.album.uri,
          },
          name: song.name,
          uri: song.uri,
        }
      })); // 200: OK
    }

    // If the client authenticated to the Spotify API but no data was returned, assume a server error by default
    else {
      res.status(500); // 500: Internal Server Error
    }
  }

  catch {
    res.status(500); // 500: Internal Server Error
  }

  return res;
}
