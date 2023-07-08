// Next.js
import type { NextApiRequest, NextApiResponse } from 'next'

// Types
import { SpotifyAccessTokenResponseData } from '../../../utils/api/types';

// Constants
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '../../../utils/api/constants';

/**
 * Handler for a utility API route to obtain a Spotify API access token that can be used
 * to make API calls on the spotify_api.tsx page.
 * 
 * @link Spotify API Access Token (via Client Credentials) documentation:
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 * 
 * @param _ Placeholder for an unused `NextApiRequest` object
 * @param res `NextApiResponse` object containing the response data from the Spotify API
 * 
 * @returns JSON response of either success or error from the Spotify API
 */
export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<SpotifyAccessTokenResponseData>
) {
  // Values for these two constants are required when obtaining an access token
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    res.status(401); // 401: Unauthorized
    return res;
  }

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + 
          (Buffer.from(SPOTIFY_CLIENT_ID + ":" + SPOTIFY_CLIENT_SECRET)).toString(
            "base64"
          ),
      },
      body: new URLSearchParams({
        grant_type: "client_credentials"
      })
    });

    // If the response was anything but successful, clone the code to the response back to the caller
    if (!response.ok) {
      res.status(response.status);
      return res;
    }

    const accessTokenData = await response.json();

    if (accessTokenData) {
      res.status(200).json({
        accessToken: accessTokenData.access_token,
        tokenType: accessTokenData.token_type,
        expiresIn: accessTokenData.expires_in
      }); // 200: OK
    }

    // If the client authenticated to the Spotify API but no data was returned, assume a server error by default
    else {
      res.status(500); // 500: Internal Server Error
    }
  }

  catch {
    res.status(500); // 500: Internal Server Error
  }

  //}, 60 * 60 * 1000);
  return res;
}
