import useData from './useData';
import { IGenre } from './useGenres';
import { IPlatform } from './usePlatforms';

export interface IGame {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: IPlatform }[];
	metacritic: number;
}

const useGames = (
	selectedGenre: IGenre | null,
	selectedPlatform: IPlatform | null
) =>
	useData<IGame>(
		'/games',
		{
			params: {
				genres: selectedGenre?.id,
				parent_platforms: selectedPlatform?.id,
			},
		},
		[selectedGenre?.id, selectedPlatform?.id]
	);

export default useGames;
