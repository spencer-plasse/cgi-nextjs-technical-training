// Redux
//import { useDispatch, useSelector } from 'react-redux'
//import { refreshAccessToken } from '../utils/redux/apiSlice';

// Custom components
import Layout from "../components/Layout";
import { FormButton } from "../components/forms/FormButton";
import { FormDropDownList } from "../components/forms/FormDropDownList";

// Constants
import { LOCAL_URL } from "../utils/constants";
import { SPOTIFY_ACCESS_TOKEN_DATA_INIT, SPOTIFY_ARTIST_IDS } from "../utils/api/constants";

// Types
import { FormDropDownListDataType } from "../utils/forms/types";
import { SpotifyAccessTokenResponseData } from '../utils/api/types';

/**
 * TODO
 * 
 * @param props Dictionary of component props
 * 
 * @returns TODO
 */
export default function SpotifyAPIPage(props: {
  accessTokenData: SpotifyAccessTokenResponseData,
  initialDisplayData: {}
}){
  let artistDropDownData: Array<FormDropDownListDataType> = [];

  // Would've been a bit more concise in Python...this converts the SPOTIFY_ARTIST_IDS dictionary
  // to an array of dictionaries with displayText and value fields for the form's dropdown list
  for (const [key, value] of Object.entries(SPOTIFY_ARTIST_IDS)) {
    artistDropDownData.push({
      displayText: key,
      value: value
    });
  }

  const handleDisplayArtistInfo = () => {
    // TODO
  }

  const handleDisplayTop10Songs = () => {
    // TODO
  }

  return (
    <Layout>
      <h1 className="opacity-75 mb-0">Spotify API Demo</h1>
      <p>[Placeholder explanation text of page]</p>

      <form className="w-1/3 border-slate-500 border-2 rounded-md border-solid p-8">
        <div className="mb-4">
          <FormDropDownList id="artist" options={artistDropDownData} labelText="Artist" required />
        </div>

        <div className="text-center">
          <FormButton type="submit" buttonText="Display Artist Info" position="inline"
            handleClick={handleDisplayArtistInfo} classNames="h-50" />
          <FormButton type="submit" buttonText="Display Top 10 Songs" position="inline"
            handleClick={handleDisplayTop10Songs} />
        </div>
      </form>
    </Layout>
  );
}

export async function getServerSideProps() {
  let accessTokenData: SpotifyAccessTokenResponseData = SPOTIFY_ACCESS_TOKEN_DATA_INIT;
  let initialDisplayData = {};

  // Asynchronous wrapper function for the API call to obtain a Spotify API access token
  const obtainAccessToken = async () => {
    const response = await fetch(`${LOCAL_URL}/api/spotify/access_token`, {
      method: "GET"
    });

    return response.json();
  };

  await obtainAccessToken().then((response) => {
    // Save access token data to Redux
    // TODO: Hooks only work in front-end code, so the whole Redux setup process needs to be refactored
    // to actually occur in a one-time useEffect() callback for this page only when the Redux store has
    // not already been created. getServerSideProps() will simply return the data needed to populate the
    // Redux store and display page contents

    accessTokenData = response;
    // TODO: Load initial page data
  });

  return {
    props: {
      accessTokenData: accessTokenData,
      initialDisplayData: initialDisplayData
    }
  };
}