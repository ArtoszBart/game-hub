import useTrailers from '../hooks/useTrailers';

interface IProps {
	gameId: number;
}

const GameTrailer = ({ gameId }: IProps) => {
	const { data, error, isLoading } = useTrailers(gameId);

	if (isLoading) return null;

	if (error) throw error;

	const video = data?.results[0];

	return video ? (
		<video src={video.data[480]} poster={video.preview} controls />
	) : null;
};

export default GameTrailer;
