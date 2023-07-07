// Next.js
import type { NextApiRequest, NextApiResponse } from 'next'

// Types
import { SpotifyArtistInfoData, SpotifyArtistInfoResponseData } from '../../../utils/api/types';

// Utility functions
import { hasAccessTokenExpired } from '../../../utils/api/helpers';

/**
 * TODO
 * 
 * @param _ Placeholder for an unused `NextApiRequest` object
 * @param res `NextApiResponse` object containing the response data from the Spotify API
 * 
 * @returns JSON response of either success or error from the Spotify API
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SpotifyArtistInfoData>
) {
  // A non-expired access token will be required to execute any other Spotify API calls
  if (!req.body.accessToken || hasAccessTokenExpired(req.body.accessToken)) {
    res.status(401); // 401: Unauthorized
    return res;
  }

  try {
    const requestURL = `https://api.spotify.com/v1/artists/${req.body.artistID}`;
    const response = await fetch(requestURL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${req.body.accessToken}`,
      },
    });

    // If the response was anything but successful, clone the code to the response back to the caller
    if (!response.ok) {
      res.status(response.status);
      return res;
    }

    const artistInfoData: SpotifyArtistInfoResponseData = await response.json();

    if (artistInfoData) {
      res.status(200).json({
        name: artistInfoData.name,
        followers: artistInfoData.followers.total,
        genres: artistInfoData.genres,
        url: artistInfoData.href,
        image: artistInfoData.images[0]
      }); // 200: OK
    }

    // If the client authenticated to the Spotify API but no data was returned, assume a server error by default
    else {
      res.status(500); // 500: Internal Server Error
    }
  } catch {
    res.status(500); // 500: Internal Server Error
  }

  return res;
}
