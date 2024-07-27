import { IGameQuery } from '../App';
import useData from './useData';
import { IPlatform } from './usePlatforms';

export interface IGame {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: IPlatform }[];
	metacritic: number;
}

const useGames = (gameQuery: IGameQuery) =>
	useData<IGame>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				parent_platforms: gameQuery.platform?.id,
			},
		},
		[gameQuery]
	);

export default useGames;
