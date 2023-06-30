// Next.js
import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * DTO type representing the Spotify API response with access token data.
 */
type ResponseData = {
  access_token: string;
  token_type: string;
  expires_in: number;
}

/**
 * Handler for a utility API route to obtain a Spotify API access token that can be used
 * to make API calls on the spotify_api.tsx page.
 * 
 * @param _ Placeholder for an unused `NextApiRequest` object
 * @param res `NextApiResponse` object containing the response data from the Spotify API
 * 
 * @returns JSON response of either success or error from the Spotify API
 */
export default async function handler(_: NextApiRequest, res: NextApiResponse<ResponseData>) {
  // TODO: if (access token in Redux store)... return it, else setInterval

  // Values for these two constants are required when obtaining an access token
  if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET) {
    res.status(401); // 401: Unauthorized
    return res;
  }
  
  /* 
   * Since Spotify API access tokens expire after an hour, the API call to obtain the token is
   * set to run on a timer of 1 hour (60 minutes * 60 seconds * 1000 milliseconds). If this call to
   * obtain a token is made while a token is still active, that access token is returned instead.
   */
  setInterval(async () => {
    // See here for API request reference: https://developer.spotify.com/documentation/web-api/tutorials/getting-started
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET).toString('base64')
      }
    });

    // If the response was anything but successful, clone the code to the response back to the caller
    if (!response.ok) {
      res.status(response.status);
      return res;
    }

    const accessTokenData = await response.json();

    // If the client authenticated to the Spotify API but no data was returned, assume a server error by default
    if (!accessTokenData) {
      res.status(500) // 500: Internal Server Error
      return res;
    }

    res.status(200).json(accessTokenData); // 200: OK
  }, 60 * 60 * 1000);
}
