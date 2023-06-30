// Custom components
import Layout from "../components/Layout";

/**
 * 
 * 
 * @param props Dictionary of component props
 * 
 * @returns TODO
 */
export default function SpotifyAPIPage(props: {

}){
  return (
    <Layout>
      <p>Placeholder text!</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Asynchronous wrapper function for the API call to obtain a Spotify API access token
  const obtainAccessToken = async () => {
    const response = await fetch("/api/spotify_access_token", {
      method: "POST"
    });

    return response.json();
  };

  obtainAccessToken().then((response) => {
    // TODO: Chain API calls for pre-rendering default API data here
  });

  // Temporary return to let the page load for now - will populate with data later
  return {
    props: {

    }
  };
}