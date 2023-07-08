// React
import React, { useState } from "react";

// React Hook Form
import { useForm } from "react-hook-form";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { refreshAccessToken } from "../utils/redux/apiSlice";

// Dates
import dayjs from "dayjs";

// Custom components
import Layout from "../components/Layout";
import { FormButton } from "../components/forms/FormButton";
import { FormDropDownList } from "../components/forms/FormDropDownList";
import { FormElementErrorMessage } from "../components/forms/FormElementErrorMessage";
import { SpotifyArtistInfo } from "../components/api/SpotifyArtistInfo";
import { SpotifyTopSongList } from "../components/api/SpotifyTopSongList";

// Constants
import { SPOTIFY_ACCESS_TOKEN_RESPONSE_DATA_INIT, SPOTIFY_ARTIST_IDS } from "../utils/api/constants";

// Types
import { FormDropDownListDataType, SpotifyAPIDemoFormInputsType } from "../utils/forms/types";
import { SpotifyAccessTokenResponseData } from '../utils/api/types';
import { SpotifyAccessTokenSliceData } from '../utils/redux/types';

// Utility functions
import { getArtistInfo, getArtistTop10Songs, hasAccessTokenExpired, obtainAccessToken } from '../utils/api/helpers';

/**
 * Component to represent the API page layout. Contains a common navbar header on the top of the page, a form
 * with an Artist dropdown list and two buttons to interact with the Spotify API, explanations of each of these
 * elements, dynamically-loaded sections to display data from the Spotify API for the selected artist, and a
 * common footer.
 * 
 * @returns Component containing the API page layout
 */
export default function SpotifyAPIPage() {
  const { register, formState: {errors} } = useForm<SpotifyAPIDemoFormInputsType>({mode: "onBlur"});
  const accessTokenData: SpotifyAccessTokenSliceData = useSelector((state: any) => state.apiReducer);
  const dispatch = useDispatch();

  const [displayData, setDisplayData] = useState<React.ReactNode>();
  const [selectedArtist, setSelectedArtist] = useState<{
    name: string;
    id: string;
  }>({
    name: "",
    id: ""
  });
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

    await getArtistInfo(accessTokenData.accessToken, selectedArtist.id).then(response => {
      setDisplayData(<SpotifyArtistInfo {...response} />);
    });
  }

  /**
   * Loads Spotify API data for the selected artist's top 10 songs.
   */
  const handleDisplayTop10Songs = async () => {
    await refreshAccessTokenData();

    await getArtistTop10Songs(accessTokenData.accessToken, selectedArtist.id).then(response => {
      setDisplayData(<SpotifyTopSongList artistName={selectedArtist.name} songs={response} />);
    });
  }

  return (
    <Layout>
      <div className="w-1/3">
        <h1 className="opacity-75 mb-0 -mt-4 text-center">Spotify API Demo</h1>
        <p className="text-center">This page contains two demo functions of the Spotify API, detailed below!</p>
        <ul>
          <li className="mb-2">
            <span className="font-bold">Artist (dropdown list)</span>:
            Required field for selecting an artist to display data for. Current options:
            <ul className="mt-2">
              {artistDropDownData.map(artist => <li key={artist.displayText}>{artist.displayText}</li>)}
            </ul>
          </li>
          <li className="mb-2">
            <span className="font-bold">Display Artist Info (button)</span>:
            Displays general information on the selected artist including name, genres, follower count,
            popularity, and their Spotify profile picture. The artist name header links to their respective
            Spotify artist page when clicked.
          </li>
          <li className="mb-2">
            <span className="font-bold">Display Top 10 Songs (button)</span>:
            Displays the selected artist's top 10 songs, including name, ranking, and album/single picture.
            Each song also links to its respective Spotify page when clicked.
          </li>
        </ul>
      </div>

      <form className="w-1/3 border-slate-500 border-2 rounded-md border-solid p-8">
        <div className="mb-4">
          <FormDropDownList name="artist" id="artist" options={artistDropDownData} labelText="Artist" required 
            register={register} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setDisplayData(undefined);
              setSelectedArtist({
                name: artistDropDownData.find(artist => artist.value === event.target.value)!.displayText,
                id: event.target.value
              });
            }} />
          {errors.artist && <FormElementErrorMessage errorMessage={errors.artist.message!} />}
        </div>

        <div className="text-center">
          <FormButton type="button" buttonText="Display Artist Info" position="inline"
            handleClick={handleDisplayArtistInfo} disabled={!selectedArtist.id} classNames="h-50" />
          <FormButton type="button" buttonText="Display Top 10 Songs" position="inline"
            handleClick={handleDisplayTop10Songs} disabled={!selectedArtist.id} />
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
  await obtainAccessToken().then((response) => accessTokenData = response);

  return {
    props: {
      initialAccessTokenData: {
        accessToken: accessTokenData.accessToken,
        tokenType: accessTokenData,
         // Spotify API access tokens last 1 hour
        expireTime: dayjs().add(accessTokenData.expiresIn, 'milliseconds').format("HH:mm:ss")
      }
    }
  };
}