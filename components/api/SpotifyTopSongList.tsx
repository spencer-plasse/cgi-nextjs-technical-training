// Custom components
import { SpotifySong } from "./SpotifySong"

// Types
import { SpotifyArtistTopSongData } from "../../utils/api/types"

/**
 * Component to display data on the top 10 songs for a selected artist when the "Display Top 10 Songs"
 * button on the API page is clicked.
 * 
 * @param props Dictionary of component props
 * @param props.artistName Name of the selected artist on the API page
 * @param props.songs Array of `SpotifyArtistTopSongData` objects from the /artist_top_songs API route to display data for
 * 
 * @returns Component that displays data on the top 10 songs for the selected artist
 */
export const SpotifyTopSongList = (props: {
	artistName: string,
	songs: Array<SpotifyArtistTopSongData>
}) => {
	return (
		<div>
			<h1 className="text-center -mb-2">Top 10 Songs by {props.artistName}</h1>

			<div className="grid grid-cols-8 place-items-center mt-6">
				<div className="col-start-2 col-end-5 mr-2">
					{props.songs.slice(0, 5).map((song, index) => (
						<div>
							<span className="font-bold text-slate-700">#{index + 1}</span>
							<SpotifySong artistName={props.artistName} song={song} key={song.name} />
						</div>
					))}
				</div>
				<div className="col-start-5 col-end-8">
					{props.songs.slice(5).map((song, index) => (
						<div>
							<span className="font-bold text-slate-700">#{index + 6}</span>
							<SpotifySong artistName={props.artistName} song={song} key={song.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}