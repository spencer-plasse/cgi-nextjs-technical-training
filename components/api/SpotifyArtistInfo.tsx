// Next.js
import Image from "next/image";

// Types
import { SpotifyArtistInfoData } from "../../utils/api/types"

// Utility functions
import { capitalize } from "../../utils/helpers";

/**
 * Component to display general data on the selected artist when the "Display Artist Info"
 * button on the API page is clicked.
 * 
 * @param props `SpotifyArtistInfoData` object containing data from the Spotify API for the selected artist
 * 
 * @returns Component that displays general data on the selected artist
 */
export const SpotifyArtistInfo = (props: SpotifyArtistInfoData) => {
	// Capitalizes all words for each genre the artist is categorized under
	const genres = props.genres.map(genre => capitalize(genre, "all")).join(", ");

	return (
		<div>
			<h1 className="hover:underline text-center -mb-2"><a href={props.uri}>{props.name}</a></h1>
			<div className="grid grid-cols-6 place-items-center">
				<div className="col-start-3 col-end-4">
					<p><span className="font-bold">Genres</span>: {genres}</p>
					<p><span className="font-bold">Followers</span>: {props.followers.toLocaleString("en-US")}</p>
					<p><span className="font-bold">Popularity</span>: {props.popularity}/100</p>
				</div>
				
				<div className="col-start-4 col-end-5 mt-6 ml-8">
					<Image src={props.image.url} width={props.image.width} height={props.image.height}
						alt={`Spotify profile picture of ${props.name}`} />
				</div>
			</div>
		</div>
	)
}