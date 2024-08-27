import { useQuery } from '@tanstack/react-query';
import { IGameQuery } from '../App';
import { IPlatform } from './usePlatforms';
import apiClient, { IFetchResponse } from '../services/apiClient';

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
			apiClient
				.get<IFetchResponse<IGame>>('/games', {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchText,
					},
				})
				.then((res) => res.data),
	});

export default useGames;
