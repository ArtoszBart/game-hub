import { useInfiniteQuery, keepPreviousData } from '@tanstack/react-query';
import ms from 'ms';
import { IGameQuery } from '../App';
import { IPlatform } from './usePlatforms';
import APIClient from '../services/apiClient';

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
	useInfiniteQuery({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		initialPageParam: 1,
		staleTime: ms('24h'),
		placeholderData: keepPreviousData,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});

export default useGames;
