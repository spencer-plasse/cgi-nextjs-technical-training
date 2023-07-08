// Next.js
import Image from "next/image";

// Types
import { SpotifyArtistTopSongData } from "../../utils/api/types"

// Utility functions
import { formatReleaseDate } from "../../utils/api/helpers";

/**
 * Smaller component to display data for a specific `SpotifyArtistTopSongData` object.
 * Displays song title and album title with their respective links, release date, whether the song
 * was a single, and the song's album's profile picture.
 * 
 * @param props Dictionary of component props
 * @param props.artistName Name of the selected artist on the API page
 * @param props.song `SpotifyArtistTopSongData` object from the /artist_top_songs API route to display data for
 * 
 * @returns Component to display data on the given song
 */
export const SpotifySong = (props: {
	artistName: string,
	song: SpotifyArtistTopSongData
}) => {
	return (
		<div className="rounded-md border-solid border-2 border-black mb-2 p-2 bg-sky-50">
			<div className="grid grid-columns-4">
				<div className="col-start-1 col-end-2">
					<Image src={props.song.album.image.url} width={props.song.album.image.width}
						height={props.song.album.image.height}
						alt={`Spotify profile picture of the ${props.song.album.name} album by ${props.artistName}`} />
				</div>
				<div className="col-start-2 text-right pl-4">
					<span className="hover:underline">
						<a href={props.song.uri}>{props.song.name}{props.song.album.albumType === "single" ? " [single]" : ""}</a>
					</span><br />
					<span className="text-slate-600 opacity-80 hover:underline">
						<a href={props.song.album.uri}>{props.song.album.name}</a>
					</span><br />
					<span className="font-bold">Release Date</span>: {formatReleaseDate(props.song.album.releaseDate)}
				</div>
			</div>
		</div>
	)
}