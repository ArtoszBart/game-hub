import { useQuery } from '@tanstack/react-query';
import { IGameQuery } from '../App';
import { IPlatform } from './usePlatforms';
import APIClient, { IFetchResponse } from '../services/apiClient';

const apiClient = new APIClient<IGame>('/games');

export interface IGame {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: IPlatform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: IGameQuery) =>
	useQuery<IFetchResponse<IGame>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
	});

export default useGames;
