import { SpotifySong } from "./SpotifySong"

/**
 * TODO
 * 
 * @param props TODO
 * 
 * @returns TODO
 */
export const SpotifyTopSongList = (props: {
	songs: Array<string>
}) => {
	return (
		<div>
			{props.songs.map(song => <SpotifySong name={song} key={song} />)}
		</div>
	)
}