// React
import React, { useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { refreshAccessToken } from "../utils/redux/apiSlice";

// Dates
import dayjs from "dayjs";

// Custom components
import Layout from "../components/Layout";
import { FormButton } from "../components/forms/FormButton";
import { FormDropDownList } from "../components/forms/FormDropDownList";
import { SpotifyArtistInfo } from "../components/api/SpotifyArtistInfo";
import { SpotifyTopSongList } from "../components/api/SpotifyTopSongList";

// Constants
import { SPOTIFY_ACCESS_TOKEN_RESPONSE_DATA_INIT, SPOTIFY_ARTIST_IDS } from "../utils/api/constants";

// Types
import { FormDropDownListDataType } from "../utils/forms/types";
import { SpotifyAccessTokenResponseData } from '../utils/api/types';
import { SpotifyAccessTokenSliceData } from '../utils/redux/types';

// Utility functions
import { getArtistInfo, getArtistTop10Songs, hasAccessTokenExpired, obtainAccessToken } from '../utils/api/helpers';

/**
 * TODO
 * 
 * @param props Dictionary of component props
 * 
 * @returns TODO
 */
export default function SpotifyAPIPage(props: {
  initialAccessTokenData: SpotifyAccessTokenSliceData,
  initialDisplayData: {}
}){
  const accessTokenData = useSelector((state: any) => state.apiReducer);
  const dispatch = useDispatch();

  const [displayData, setDisplayData] = useState<React.ReactNode>();
  const [selectedArtistId, setSelectedArtistId] = useState<string>("");
  let artistDropDownData: Array<FormDropDownListDataType> = SPOTIFY_ARTIST_IDS.map(artist => {
    return {
      displayText: artist.name,
      value: artist.id
    }
  });

  /**
   * Async wrapper function to refresh the Spotify API access token if it has expired.
   */
  const refreshAccessTokenData = async () => {
    if (hasAccessTokenExpired(accessTokenData.expireTime)) {
      await obtainAccessToken().then(response => {
        dispatch(refreshAccessToken(response));
      });
    }
  }

  /**
   * Loads Spotify API data for the selected artist.
   */
  const handleDisplayArtistInfo = async () => {
    await refreshAccessTokenData();
    await getArtistInfo(selectedArtistId).then(response => {
      setDisplayData(<SpotifyArtistInfo />);
    });
  }

  /**
   * Loads Spotify API data for the selected artist's top 10 songs.
   */
  const handleDisplayTop10Songs = async () => {
    await refreshAccessTokenData();
    await getArtistTop10Songs(selectedArtistId).then(response => {
      setDisplayData(<SpotifyTopSongList songs={["Truce", "Goner", "Leave the City", "Redecorate"]} />);
    });
  }

  return (
    <Layout>
      <h1 className="opacity-75 mb-0">Spotify API Demo</h1>
      <p>[Placeholder explanation text of page]</p>

      <form className="w-1/3 border-slate-500 border-2 rounded-md border-solid p-8">
        <div className="mb-4">
          <FormDropDownList id="artist" options={artistDropDownData} labelText="Artist" required 
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setSelectedArtistId(event.target.value)
            }} />
        </div>

        <div className="text-center">
          <FormButton type="submit" buttonText="Display Artist Info" position="inline"
            handleClick={handleDisplayArtistInfo} classNames="h-50" />
          <FormButton type="submit" buttonText="Display Top 10 Songs" position="inline"
            handleClick={handleDisplayTop10Songs} />
        </div>
      </form>

      <div>
        {displayData}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  let accessTokenData: SpotifyAccessTokenResponseData = SPOTIFY_ACCESS_TOKEN_RESPONSE_DATA_INIT;
  let initialDisplayData = {};

  await obtainAccessToken().then((response) => {
    accessTokenData = response;

    // TODO: Load initial page data

  });

  return {
    props: {
      initialAccessTokenData: {
        accessToken: accessTokenData.accessToken,
        tokenType: accessTokenData,
         // Spotify API access tokens last 1 hour
        expireTime: dayjs().add(accessTokenData.expiresIn, 'milliseconds').format("HH:mm:ss")
      },
      initialDisplayData: initialDisplayData
    }
  };
}